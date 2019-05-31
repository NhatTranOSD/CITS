using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Common.Enums
{
    public enum ApplicantStatus
    {
        New = 0,
        Applicant_Review = 1,
        Applicant_Completed = 2,
        Agent_Review = 3,
        Agent_Review_Reminder = 4,
        Agent_Reviewed = 5,
        Agent_Decilined = 6,
        Agent_Approved = 7,
    }
}
