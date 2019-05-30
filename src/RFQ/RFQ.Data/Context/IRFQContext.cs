using Microsoft.EntityFrameworkCore;
using RFQ.Entites;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RFQ.Data.Context
{
    public interface IRFQContext
    {
        DbSet<User> User { get; set; }

        DbSet<Applicant> Applicant { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
