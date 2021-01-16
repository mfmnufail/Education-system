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


        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Polist>()

               .HasData(
               new Polist { Id = 1,  Po_code = "PO1", Description = "Nothing", Po_name = "Viva", Weight = 0.5 },
               new Polist { Id = 2, Po_code = "PO1", Description = "Nothing", Po_name = "Viva", Weight = 0.5 },
               new Polist { Id = 3, Po_code = "PO1", Description = "Nothing", Po_name = "Viva", Weight = 0.5 },
               new Polist { Id = 4, Po_code = "PO1", Description = "Nothing", Po_name = "Viva", Weight = 0.5 }


               );

            builder.Entity<Lolist>()

                .HasData(
                new Lolist {Id = 1,   Lo_code = "LO1", Lo_name = "Practical", Description = "Nothing", Weight = 0.2, },
                  new Lolist { Id = 2, Lo_code = "LO1", Lo_name = "Practical", Description = "Nothing", Weight = 0.2, },
                    new Lolist { Id = 3, Lo_code = "LO1", Lo_name = "Practical", Description = "Nothing", Weight = 0.2, },
                      new Lolist { Id = 4, Lo_code = "LO1", Lo_name = "Practical", Description = "Nothing", Weight = 0.2, }

                );


            //builder.Entity<Polist>(x => x.HasKey(ua => 
            //new { ua.PolistId}));

            //builder.Entity<Polist>()
            //    .HasOne(a => a.Lolist)
            //    .WithMany(b => b.Polists);
                



        }

    }
}
