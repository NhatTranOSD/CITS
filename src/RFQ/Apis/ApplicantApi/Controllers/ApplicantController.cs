using ApplicantApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ApplicantApi.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        private static Applicant[] applicants = new Applicant[] {
                new Applicant() { ApplicantId = "1", Address = "Quang Ngai", ApplicantName = "Nhat", CreateDate = DateTime.Now.ToString(), PhoneNumber = "123123123", Status = "Reviewing"},
                new Applicant() { ApplicantId = "2", Address = "Quang Ngai", ApplicantName = "Nhi", CreateDate = DateTime.Now.ToString(), PhoneNumber = "123123123", Status = "Reviewing"},
                new Applicant() { ApplicantId = "3", Address = "Quang Ngai", ApplicantName = "Nguyen", CreateDate = DateTime.Now.ToString(), PhoneNumber = "123123123", Status = "Reviewing"},
            };

        [HttpGet]
        public ActionResult<IEnumerable<Applicant>> Get()
        {
            return applicants;
        }

        [HttpPost("{id}")]
        public ActionResult<Applicant> getApplicant(string id)
        {
            return applicants.Where(x => x.ApplicantId == id).SingleOrDefault();
        }

        [HttpPost("accept/{id}")]
        public ActionResult<bool> acceptApplicant(string id)
        {
            applicants.Where(x => x.ApplicantId == id).SingleOrDefault().Status = "Accepted";
            return true;
        }
    }
}