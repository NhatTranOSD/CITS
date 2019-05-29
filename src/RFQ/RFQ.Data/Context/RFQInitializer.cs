using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Data.Context
{
    public class RFQInitializer
    {
        public static void Initialize(RFQContext context)
        {
            var initializer = new RFQInitializer();
            initializer.SeedEverything(context);
        }

        public void SeedEverything(RFQContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
