using RFQ.Service.Models.Reponses;
using RFQ.Service.Models.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RFQ.Service.Interface
{
    public interface IUserService
    {
        Task<UserReponse> Login(LoginRequest model);
    }
}
