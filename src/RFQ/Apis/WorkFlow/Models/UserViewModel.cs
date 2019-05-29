using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RFQ.Apis.WorkFlow.Models
{
    public class UserViewModel
    {
        public string UserName { get; set; }

        public string PassWord { get; set; }

        public UserType UserType { get; set; }
    }

    public enum UserType
    {
        None = 0,
        Applicant = 1,
        Agent = 2,
        Organization = 3,
    }
}
