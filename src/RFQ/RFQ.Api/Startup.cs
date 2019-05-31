using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
//using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RFQ.Api.Filters;
using RFQ.Common.AutoMapper;
using RFQ.Common.Settings;
using RFQ.Data.Context;
using RFQ.Service.Interface;
using RFQ.Service.Services;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace RFQ.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                                });
            });

            services.Configure<EmailSettings>(options => Configuration.GetSection("EmailSettings").Bind(options));
            // Add AutoMapper
            services.AddAutoMapper(new Assembly[] { typeof(AutoMapperProfile).GetTypeInfo().Assembly });

            services.AddDbContext<IRFQContext, RFQContext>(options =>
               options.UseSqlServer(Configuration.GetConnectionString("RFQDatabase")),ServiceLifetime.Transient);

            services.AddSingleton<IHostedService, AgentReminderService>();

            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IApplicantService, ApplicantService>();
            services.AddTransient<IEmailService, EmailService>();

            services.AddMvc(options => options.Filters.Add(typeof(CustomExceptionFilterAttribute))).SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddSwaggerDocument();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseStaticFiles();

            app.UseCors();

            app.UseSwagger();
            app.UseSwaggerUi3();

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
