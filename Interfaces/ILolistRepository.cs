using ObeSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObeSystem.Interfaces
{
    public interface ILolistRepository 
    {
        
        Task<Lolist> GetLolistByIdAsync(int id);

        Task<IEnumerable<Lolist>> GetLolistAsync();

        Lolist Add(Lolist lolist);

        Lolist Update(Lolist lolistchanges);

        Lolist Delete(int id);
    }                                              
}                                                  
                                                   
                                                   
                                                   
                                                   
                                                   