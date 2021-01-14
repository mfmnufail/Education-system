using Microsoft.AspNetCore.Mvc;
using ObeSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObeSystem.Interfaces
{
    public interface IPolistRepository
    {
        Task<Polist> GetPolistByIdAsync(int id);

        Task<IEnumerable<Polist>> GetPolistAsync();

        Polist Add(Polist polist);

        Polist Update(Polist polistchanges);

        Polist Delete(int id);
    }
}
