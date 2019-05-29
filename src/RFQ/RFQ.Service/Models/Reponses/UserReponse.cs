using AutoMapper;
using RFQ.Common.Enums;
using RFQ.Entites;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Service.Models.Reponses
{
    public class UserReponse
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }

        public Guid Id { get; set; }
        public UserType UserType { get; set; }

        public void CreateMappings(Profile configuration)
        {
            configuration.CreateMap<User, UserReponse>();
        }
    }
}
