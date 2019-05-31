using Microsoft.EntityFrameworkCore;
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
        private readonly IRFQContext _context;
        public AgentReminderService(IEmailService emailService, IRFQContext context)
        {
            _emailService = emailService;
            _context = context;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                //await _randomStringProvider.UpdateString(cancellationToken);
                await ProcessReminder(cancellationToken);
                await Task.Delay(TimeSpan.FromMinutes(1), cancellationToken);
            }
        }

        private async Task ProcessReminder(CancellationToken cancellationToken)
        {
            DbFunctions dfunc = null;
            var dateNow = DateTime.Now;

            var applicants = await _context.Applicant.Where(x => x.Status == Common.Enums.ApplicantStatus.Applicant_Review && SqlServerDbFunctionsExtensions.DateDiffMinute(dfunc, Convert.ToDateTime(dateNow), Convert.ToDateTime(x.UpdatedDate)) >= 5).ToListAsync();

            if (applicants.Any())
            {
                foreach(var applicant in applicants)
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
