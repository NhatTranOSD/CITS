using Microsoft.EntityFrameworkCore;
using RFQ.Data.Extensions;
using RFQ.Entites;

namespace RFQ.Data.Context
{
    public class RFQContext : DbContext, IRFQContext
    {
        public RFQContext(DbContextOptions<RFQContext> options) : base(options)
        {
            
        }

        #region Entity Sets
        public DbSet<User> User { get; set; }

        public DbSet<Applicant> Applicant { get; set; }

        #endregion


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyAllConfigurations();
        }
    }
}
