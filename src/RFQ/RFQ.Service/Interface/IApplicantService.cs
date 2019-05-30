using RFQ.Service.Models.Reponses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RFQ.Service.Interface
{
    public interface IApplicantService
    {
        Task<IEnumerable<ApplicantResponse>> Applicants(string agentId);

        Task<ApplicantResponse> CreateApplicant(string agentId);

        Task<ApplicantResponse> ApplicantInfoAsync(string applicantId);

        Task<bool> UploadFile(string applicantId); // Consider fileContent

        Task<string> GetContent(string applicantId); // return content Url

        Task<bool> AcceptApplicant(string applicantId);

        Task<bool> RefuseApplicant(string applicantId);
    }
}
