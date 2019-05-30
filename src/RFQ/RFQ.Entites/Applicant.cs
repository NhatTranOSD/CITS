using RFQ.Common.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Entites
{
    public class Applicant : IEntityBase
    {
        public Guid Id { get; set; }

        public Guid ApplicantUserId { get; set; }

        public Guid AgentUserId { get; set; }

        public ApplicantStatus Status { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }
    }
}
