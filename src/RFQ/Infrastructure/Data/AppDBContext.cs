using Microsoft.EntityFrameworkCore;
using RFQ.ApplicationCore.Entities;

namespace RFQ.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        //public DbSet<School> Schools { get; set; }

    }
}
