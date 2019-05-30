using AutoMapper;
using RFQ.Data.Context;
using RFQ.Service.Interface;
using RFQ.Service.Models.Reponses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RFQ.Entites;
using System.Threading;
using RFQ.Common.Enums;

namespace RFQ.Service.Services
{
    public class ApplicantService : IApplicantService
    {
        private readonly IRFQContext _context;
        private readonly IMapper _mapper;

        public ApplicantService(IRFQContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ApplicantResponse>> Applicants(string agentId)
        {
            var data = await _context.Applicant.Where(x => x.AgentUserId.ToString() == agentId).ToListAsync();

            return _mapper.Map<IEnumerable<ApplicantResponse>>(data);
        }

        public Task<ApplicantResponse> CreateApplicant(string agentId)
        {
            return null;
        }

        public async Task<ApplicantResponse> CreateApplicantAsync(Applicant applicant)
        {
            var data = await _context.Applicant.AddAsync(applicant);
            return _mapper.Map<ApplicantResponse>(data);
        }

        public async Task<ApplicantResponse> ApplicantInfoAsync(string applicantId)
        {
            var data = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);

            return _mapper.Map<ApplicantResponse>(data);
        }

        public async Task<ApplicantResponse> ApplicantInfoByUserId(string userId)
        {
            var data = await _context.Applicant.SingleOrDefaultAsync(x => x.ApplicantUserId.ToString() == userId);

            return _mapper.Map<ApplicantResponse>(data);
        }

        public Task<bool> UploadFile(string applicantId)
        {
            return null;
        }

        public Task<string> GetContent(string applicantId)
        {
            return null;
        }

        public async Task<bool> AcceptApplicant(string applicantId)
        {
            var applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);
            applicant.Status = ApplicantStatus.Agent_Reviewed;

            await ChangeStatusApplicant(applicant);

            return true;
        }

        public async Task<bool> RefuseApplicant(string applicantId)
        {
            var applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);
            applicant.Status = ApplicantStatus.Agent_Decilined;

            await ChangeStatusApplicant(applicant);

            return true;
        }

        private async Task ChangeStatusApplicant(Applicant applicant)
        {
            var ct = _context.Applicant.Attach(applicant);
            ct.Property(x => x.Status).IsModified = true;

            await _context.SaveChangesAsync(CancellationToken.None);
        }
    }
}
