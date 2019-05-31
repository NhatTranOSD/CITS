using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Common.Constants
{
    public static class EmailConstants
    {
        public const string EMAIL_APPLICANT_CREATE_Content = @"Agent just created a applicant process for you. Please login with password {0} to view.";
        public const string EMAIL_APPLICANT_CREATE_Subject = @"Applicant Create";


        public const string Email_Agent_Review = @"The your applicant is changes status. Please review it";
        public const string Email_Agent_Review_Subject = @"Applicant Review";

        public const string Email_Agent_Review_Reminder = @"The your applicant is changes status. Please review it";
        public const string Email_Agent_Review_Reminder_Subject = @"Applicant Review Reminder";
    }
}
