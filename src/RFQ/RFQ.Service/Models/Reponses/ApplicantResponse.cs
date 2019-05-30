using AutoMapper;
using RFQ.Common.Enums;
using RFQ.Entites;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Service.Models.Reponses
{
    public class ApplicantResponse
    {
        public Guid Id { get; set; }

        public ApplicantStatus Status { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        public void CreateMappings(Profile configuration)
        {
            configuration.CreateMap<Applicant, ApplicantResponse>();
        }
    }
}
