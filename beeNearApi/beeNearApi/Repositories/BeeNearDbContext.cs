using beeNearApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beeNearApi.Repositories
{
    public class BeeNearDbContext : DbContext
    {
        public BeeNearDbContext(DbContextOptions<BeeNearDbContext> options)
           : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

        protected override void OnModelCreating(ModelBuilder modelBuider) {
            modelBuider.Entity<Luggage>().Ignore(c => c.AmmountToPay);
        }
        //Entities
        public DbSet<Luggage> Luggages { get; set; }
    }
}
