using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{

   
    public class AirContext : DbContext
    {
         public DbSet<Favorites> Fav {get; set;}
         
         public DbSet<Description> Desc {get; set;}

         public AirContext(DbContextOptions options) : base(options)
         {
             
         }
    }

}