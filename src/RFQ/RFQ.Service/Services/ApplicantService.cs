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
using RFQ.Service.Models.Request;

namespace RFQ.Service.Services
{
    public class ApplicantService : IApplicantService
    {
        private readonly IRFQContext _context;
        private readonly IMapper _mapper;
        private readonly IEmailService _emailService;
        public ApplicantService(IRFQContext context, IMapper mapper, IEmailService emailService)
        {
            _context = context;
            _mapper = mapper;
            _emailService = emailService;
        }

        public async Task<IEnumerable<ApplicantResponse>> Applicants(string agentId)
        {
            var data = await _context.Applicant.Where(x => x.AgentUserId.ToString() == agentId).ToListAsync();

            return _mapper.Map<IEnumerable<ApplicantResponse>>(data);
        }

        public async Task<ApplicantResponse> CreateApplicantAsync(ApplicantCreateRequest applicantCreateRequest)
        {
            bool valid = UserNameValid(applicantCreateRequest.Email);

            if (!valid)
                return null;

            var passWord = "123456";
            User user = new User() { Id = Guid.NewGuid(), UserName = applicantCreateRequest.Email, PassWord = passWord, UserType = UserType.Applicant };

            Applicant applicant = new Applicant()
            {
                Id = Guid.NewGuid(),
                Email = applicantCreateRequest.Email,
                AgentUserId = Guid.Parse(applicantCreateRequest.AgentId),
                ApplicantUserId = user.Id,
                CreatedDate = DateTime.UtcNow,
                UpdatedDate = DateTime.UtcNow,
                FullName = applicantCreateRequest.FullName,
                Status = ApplicantStatus.New,
            };

            await _context.User.AddAsync(user);

            await _context.Applicant.AddAsync(applicant);

            await _context.SaveChangesAsync(CancellationToken.None);

            await _emailService.EmailApplicant(applicantCreateRequest.Email, passWord);
            return _mapper.Map<ApplicantResponse>(applicant);
        }

        private bool UserNameValid(string userName)
        {
            var used = _context.User.SingleOrDefault(x => x.UserName == userName);

            return (used != null) ? false : true;
        }

        public async Task<ApplicantResponse> UpdateApplicantAsync(ApplicantUpdateRequest applicantRequest)
        {
            Applicant applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantRequest.Id);

            applicant.Address = applicantRequest.Address;
            applicant.FullName = applicantRequest.FullName;
            applicant.PhoneNumber = applicantRequest.PhoneNumber;
            applicant.Description = applicantRequest.Description;
            applicant.Status = ApplicantStatus.Applicant_Review;

            await _context.SaveChangesAsync(CancellationToken.None);

            return _mapper.Map<ApplicantResponse>(applicant);
        }

        public async Task<ApplicantResponse> ApplicantInfoAsync(string applicantId)
        {
            var applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);

            if (applicant.Status == ApplicantStatus.Applicant_Completed)
            {
                await ChangeStatusApplicant(applicant, ApplicantStatus.Agent_Reviewed);
            }

            return _mapper.Map<ApplicantResponse>(applicant);
        }

        public async Task<ApplicantResponse> ApplicantInfoByUserId(string userId)
        {
            var applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.ApplicantUserId.ToString() == userId);

            return _mapper.Map<ApplicantResponse>(applicant);
        }

        public async Task<bool> UploadFile(string applicantId, string filePath)
        {
            Applicant applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);

            applicant.DocumentPath = filePath;
            applicant.Status = ApplicantStatus.Applicant_Completed;

            _context.Applicant.Update(applicant);

            await _context.SaveChangesAsync(CancellationToken.None);

            return true;
        }

        public async Task<string> GetContent(string applicantId)
        {
            var applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);

            if (applicant != null)
            {
                return applicant.DocumentPath;
            }

            return null;
        }

        public async Task<bool> AcceptApplicant(string applicantId)
        {
            var applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);

            await ChangeStatusApplicant(applicant, ApplicantStatus.Agent_Approved);

            await _emailService.EmailAgentApprove(applicant.Email);

            return true;
        }

        public async Task<bool> RefuseApplicant(string applicantId)
        {
            var applicant = await _context.Applicant.SingleOrDefaultAsync(x => x.Id.ToString() == applicantId);

            await ChangeStatusApplicant(applicant, ApplicantStatus.Agent_Declined);

            await _emailService.EmailAgentReject(applicant.Email);

            return true;
        }

        private async Task ChangeStatusApplicant(Applicant applicant, ApplicantStatus status)
        {
            applicant.Status = status;
            var ct = _context.Applicant.Attach(applicant);
            ct.Property(x => x.Status).IsModified = true;

            await _context.SaveChangesAsync(CancellationToken.None);
        }
    }
}
