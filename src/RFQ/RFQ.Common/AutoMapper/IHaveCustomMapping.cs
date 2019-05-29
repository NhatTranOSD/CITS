using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Common.AutoMapper
{
    public interface IHaveCustomMapping
    {
        void CreateMappings(Profile configuration);
    }
}
