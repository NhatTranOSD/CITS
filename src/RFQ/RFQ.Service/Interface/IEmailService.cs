using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RFQ.Service.Interface
{
    public interface IEmailService
    {
        Task EmailApplicant(string email, string password);

        Task EmailAgentReviewer(string email);

        Task EmailAgentReviewerReminder(string email);
    }
}
