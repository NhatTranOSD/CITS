using Microsoft.Extensions.Options;
using RFQ.Common.Constants;
using RFQ.Common.Settings;
using RFQ.Service.Interface;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace RFQ.Service.Services
{
    public class EmailService : IEmailService
    {
        private EmailSettings _settings;
        public EmailService(IOptions<EmailSettings> settings)
        {
            _settings = settings.Value;
        }


        public async Task EmailApplicant(string email, string password)
        {
            var contentEmail = string.Format(EmailConstants.EMAIL_APPLICANT_CREATE_Content, password);

            await SendEmail(email, EmailConstants.EMAIL_APPLICANT_CREATE_Subject, contentEmail);
        }

        public async Task EmailAgentReviewer(string email)
        {
            await SendEmail(email, EmailConstants.Email_Agent_Review_Subject, EmailConstants.Email_Agent_Review);
        }

        public async Task EmailAgentReviewerReminder(string email)
        {
            await SendEmail(email, EmailConstants.Email_Agent_Review_Reminder_Subject, EmailConstants.Email_Agent_Review_Reminder);
        }

        private async Task SendEmail(string email, string subject, string message)
        {
            using (var client = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = _settings.Email,
                    Password = _settings.Password
                };

                client.Credentials = credential;
                client.Host = _settings.Host;
                client.Port = int.Parse(_settings.Port);
                client.EnableSsl = true;

                using (var emailMessage = new MailMessage())
                {
                    emailMessage.To.Add(new MailAddress(email));
                    emailMessage.From = new MailAddress(_settings.Email);
                    emailMessage.Subject = subject;
                    emailMessage.Body = message;
                    client.Send(emailMessage);
                }
            }
            await Task.CompletedTask;
        }
    }
}
