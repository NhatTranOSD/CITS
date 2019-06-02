using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RFQ.Entites;
using RFQ.Service.Interface;
using RFQ.Service.Models.Reponses;
using RFQ.Service.Models.Request;
using RFQ.Common;
using Microsoft.AspNetCore.Hosting;

namespace RFQ.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        private readonly IApplicantService _applicantService;
        private readonly IHostingEnvironment _hostingEnvironment;

        public ApplicantController(IApplicantService applicantService, IHostingEnvironment hostingEnvironment)
        {
            _applicantService = applicantService;
            _hostingEnvironment = hostingEnvironment;
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
        public async Task<ActionResult<bool>> UploadFile(string Id)
        {
            try
            {
                var file = Request.Form.Files[0];
                string filePath = string.Empty;

                if (file != null)
                {
                    filePath = FileExtentions.SaveFile(file, _hostingEnvironment.WebRootPath);
                }

                if (!string.IsNullOrEmpty(filePath) && !string.IsNullOrEmpty(Id))
                {
                    await _applicantService.UploadFile(Id, filePath);
                }

                return Ok(true);

            }
            catch (Exception ex)
            {
                return BadRequest();
                throw ex;
            }

        }

        [Route("{Id}/Content")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> GetContent(string Id)
        {
            try
            {
                string contentPath = await _applicantService.GetContent(Id);

                if (contentPath != null)
                {
                    FileStream file = FileExtentions.DownloadFile(contentPath, _hostingEnvironment.WebRootPath);

                    var memory = new MemoryStream();

                    await file.CopyToAsync(memory);

                    memory.Position = 0;
                    return File(memory, FileExtentions.GetMimeType(contentPath), Path.GetFileName(contentPath));
                }
            }
            catch
            {

            }

            return BadRequest();
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