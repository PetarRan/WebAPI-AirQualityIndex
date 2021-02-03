using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace WebAPI.Models
{
    [Table("Opis")]
    public class Description
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }   
        
        [Column("Cist Vazduh")]
        [MaxLength(255)]
        public string row1 { get; set; } 
        
        [Column("Umereno Zagadjen")]
        [MaxLength(255)]
        public string row2 { get; set; }
        
        [Column("Zagadjen")]
        [MaxLength(255)]
        public string row3 { get; set; }
        
        [Column("Otrovno i Nezdravo")]
        [MaxLength(255)]
        public string row4 { get; set; }

    }
}