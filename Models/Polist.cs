using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ObeSystem.Models
{
    
    public class Polist
    {
        
        public int Id { get; set; }

        [Required]
        public string Po_name { get; set; }

        [Required]
        public string Po_code { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public double Weight { get; set; }

       
       
    }
}
