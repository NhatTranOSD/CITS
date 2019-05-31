using RFQ.Entites;
using RFQ.Service.Models.Reponses;
using RFQ.Service.Models.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RFQ.Service.Interface
{
    public interface IApplicantService
    {
        Task<IEnumerable<ApplicantResponse>> Applicants(string agentId);

        Task<ApplicantResponse> CreateApplicantAsync(ApplicantCreateRequest createRequest);

        Task<ApplicantResponse> UpdateApplicantAsync(ApplicantUpdateRequest applicant);

        Task<ApplicantResponse> ApplicantInfoAsync(string applicantId);

        Task<ApplicantResponse> ApplicantInfoByUserId(string userId);

        Task<bool> UploadFile(string applicantId, string filePath); // Consider fileContent

        Task<string> GetContent(string applicantId); // return content Url

        Task<bool> AcceptApplicant(string applicantId);

        Task<bool> RefuseApplicant(string applicantId);
    }
}
