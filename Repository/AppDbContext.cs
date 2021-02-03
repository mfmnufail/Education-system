using Microsoft.EntityFrameworkCore;
using ObeSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObeSystem.Repository
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Lolist> Lolists { get; set; }

        public DbSet<Polist> Polists { get; set; }

        public DbSet<User> Users { get; set; }



    }
}
