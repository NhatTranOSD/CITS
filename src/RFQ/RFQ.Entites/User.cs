using RFQ.Common.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Entites
{
    public class User : IEntityBase
    {
        public Guid Id { get; set; }
    
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public UserType UserType { get; set; }

    }
}
