using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Service.Models.Request
{
    public class LoginRequest
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }
    }
}
