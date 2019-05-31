using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RFQ.Common.BackgroundJob;
using RFQ.Data.Context;
using RFQ.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RFQ.Service.Services
{
    public class AgentReminderService : HostedService
    {
        private readonly IEmailService _emailService;
        // private readonly IRFQContext _context;
        private readonly IServiceScopeFactory serviceScopeFactory;
        public AgentReminderService(IEmailService emailService, IServiceScopeFactory serviceScopeFactory)
        {
            _emailService = emailService;
            this.serviceScopeFactory = serviceScopeFactory;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                //await _randomStringProvider.UpdateString(cancellationToken);
                await ProcessReminder(cancellationToken);
                await Task.Delay(TimeSpan.FromSeconds(5), cancellationToken);
            }
        }

        private async Task ProcessReminder(CancellationToken cancellationToken)
        {
            using (var scope = this.serviceScopeFactory.CreateScope())
            {
                var _context = scope.ServiceProvider.GetService<IRFQContext>();

                DbFunctions dfunc = null;
                var dateNow = DateTime.UtcNow;

                var applicants = await _context.Applicant.Where(x => x.Status == Common.Enums.ApplicantStatus.Applicant_Completed
                && SqlServerDbFunctionsExtensions.DateDiffMinute(dfunc, x.UpdatedDate, dateNow) >= 1).ToListAsync();

                if (applicants.Any())
                {
                    foreach (var applicant in applicants)
                    {
                        var agent = _context.User.Where(x => x.Id == applicant.AgentUserId).FirstOrDefault();

                        await _emailService.EmailAgentReviewerReminder(agent.UserName);

                        applicant.Status = Common.Enums.ApplicantStatus.Agent_Review_Reminder;
                        await _context.SaveChangesAsync(CancellationToken.None);

                    }
                }
            }


        }
    }
}
