using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ObeSystem.Models
{
    
    public class Lolist
    {

        public int Id { get; set; }

        [Required]
        public string Lo_name { get; set; }

        [Required]
        public string Lo_code { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public double Weight { get; set; }

        
        public ICollection<Polist> Polists { get; set; }
    }
}
