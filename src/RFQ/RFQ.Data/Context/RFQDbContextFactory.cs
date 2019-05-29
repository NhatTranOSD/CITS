using Microsoft.EntityFrameworkCore;
using RFQ.Data.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Data.Context
{
    public class RFQDbContextFactory : DesignTimeDbContextFactoryBase<RFQContext>
    {
        protected override RFQContext CreateNewInstance(DbContextOptions<RFQContext> options)
        {
            return new RFQContext(options);
        }
    }
}
