﻿using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Service.Models.Request
{
    public class ApplicantRequest
    {
        public string ApplicantId { get; set; }

        public int Status { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string DateOfBirth { get; set; }
    }
}
