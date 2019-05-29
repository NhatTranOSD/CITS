using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RFQ.Entites;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFQ.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Id);
          
            builder.Property(e => e.UserName).IsRequired().HasMaxLength(50);

            builder.Property(e => e.PassWord).IsRequired().HasMaxLength(50);

            builder.Property(e => e.UserType).IsRequired();
        }
    }
}
