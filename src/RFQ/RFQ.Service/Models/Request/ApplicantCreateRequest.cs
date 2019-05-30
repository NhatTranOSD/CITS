using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Service.Models.Request
{
    public class ApplicantCreateRequest
    {
        public string AgentId { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }
    }
}
