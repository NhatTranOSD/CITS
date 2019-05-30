using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RFQ.Entites;
using RFQ.Service.Interface;
using RFQ.Service.Models.Reponses;
using RFQ.Service.Models.Request;

namespace RFQ.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        private readonly IApplicantService _applicantService;

        public ApplicantController(IApplicantService applicantService)
        {
            _applicantService = applicantService;
        }

        [Route("{agentId}")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<IEnumerable<ApplicantResponse>>> Applicants(string agentId)
        {
            var result = await _applicantService.Applicants(agentId);
            return Ok(result);
        }

        [Route("Create")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ApplicantResponse>> CreateApplicant(ApplicantCreateRequest applicant)
        {
            var result = await _applicantService.CreateApplicantAsync(applicant);
            return Ok(result);
        }

        [Route("Update")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ApplicantResponse>> UpdateApplicant(ApplicantUpdateRequest applicant)
        {
            var result = await _applicantService.UpdateApplicantAsync(applicant);
            return Ok(result);
        }

        [Route("{Id}")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ApplicantResponse>> ApplicantInfo(string Id)
        {
            var result = await _applicantService.ApplicantInfoAsync(Id);
            return Ok(result);
        }

        [Route("ApplicantInfoByUserId/{id}")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ApplicantResponse>> ApplicantInfoByUserId(string Id)
        {
            var result = await _applicantService.ApplicantInfoByUserId(Id);
            return Ok(result);
        }

        [Route("{Id}/UploadFile")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> UploadFile(string Id, IFormFile formFile)
        {
            var result = await _applicantService.UploadFile(Id);
            return Ok(result);
        }

        [Route("{Id}/Content")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> GetContent(string Id)
        {
            var result = await _applicantService.GetContent(Id);
            return Ok(result);
        }

        [Route("{Id}/Accept")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> AcceptApplicant(string Id)
        {
            var result = await _applicantService.AcceptApplicant(Id);
            return Ok(result);
        }

        [Route("{Id}/Refuse")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> RefuseApplicant(string Id)
        {
            var result = await _applicantService.RefuseApplicant(Id);
            return Ok(result);
        }
    }
}