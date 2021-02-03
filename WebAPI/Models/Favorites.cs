using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace WebAPI.Models
{
    [Table("Favorite/Saved")]

    public class Favorites
    {   
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("aqi")] 
        public int aqi {get; set;}

        [Column("city")] //aqi, city
        [MaxLength(255)]
        public string city {get; set;}

 
    }
}