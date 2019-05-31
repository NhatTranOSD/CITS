using RFQ.Common.BackgroundJob;
using RFQ.Data.Context;
using RFQ.Service.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RFQ.Service.Services
{
    public class AgentReminderService : HostedService
    {
        private readonly IEmailService _emailService;
        private readonly IRFQContext _context;
        public AgentReminderService(IEmailService emailService)
        {
            _emailService = emailService;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                //await _randomStringProvider.UpdateString(cancellationToken);
                await Task.Delay(TimeSpan.FromSeconds(5), cancellationToken);
            }
        }

        private void ProcessReminder(CancellationToken cancellationToken)
        {

        }

       



    }
}
