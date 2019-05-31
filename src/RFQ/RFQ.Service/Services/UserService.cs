using AutoMapper;
using Microsoft.EntityFrameworkCore;
using RFQ.Common.Exceptions;
using RFQ.Data.Context;
using RFQ.Entites;
using RFQ.Service.Interface;
using RFQ.Service.Models.Reponses;
using RFQ.Service.Models.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RFQ.Service.Services
{
    public class UserService : IUserService
    {
        private readonly IRFQContext _context;
        private readonly IMapper _mapper;

        public UserService(IRFQContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<UserReponse> Login(LoginRequest model)
        {
            var data = await _context.User.FirstOrDefaultAsync(x => x.UserName == model.UserName && x.PassWord == model.PassWord);

            return _mapper.Map<UserReponse>(data);
           
        }
    }
}
