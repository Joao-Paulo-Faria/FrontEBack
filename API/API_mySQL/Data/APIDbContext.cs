using API_mySQL.Models;
using Microsoft.EntityFrameworkCore;

namespace API_mySQL.Data
{
    public class APIDbContext: DbContext
    {
        //public APIDbContext(DbContextOptions<APIDbContext> options) : base(options)
        //{

        //}
        public DbSet<Estado> Estado { get; set; }
        public DbSet<Cadastro> Cadastro { get; set; }
    }   
    
}

