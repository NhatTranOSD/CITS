using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RFQ.Apis.WorkFlow.Models;

namespace RFQ.Apis.WorkFlow.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public ActionResult<UserViewModel> Login(UserViewModel model)
        {
            return new UserViewModel() { UserName = model.UserName, UserType = UserType.Applicant };
        }
    }
}