using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Common.Enums
{
    public enum ApplicantStatus
    {
        New,
        Applicant_Review,
        Applicant_Completed,
        Agent_Review,
        Agent_Reviewed,
        Agent_Decilined,
        Agent_Approved
    }
}
