using Microsoft.EntityFrameworkCore;
using ObeSystem.Interfaces;
using ObeSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObeSystem.Repository
{
    public class PolistRepository : IPolistRepository
    {

        private readonly AppDbContext _context;

        public PolistRepository(AppDbContext context)
        {
            _context = context;
        }



        public Polist Add(Polist polist)
        {
            polist.PolistId = _context.Polists.Max(x => x.PolistId) + 1;

            _context.Polists.Add(polist);
            _context.SaveChanges();
            return polist;
        }

        public Polist Delete(int id)
        {
            Polist polist = _context.Polists.FirstOrDefault(e => e.PolistId == id);
            if (polist != null)
            {
                _context.Polists.Remove(polist);
                _context.SaveChanges();
            }

            return (polist);
        }

        public async Task<IEnumerable<Polist>> GetPolistAsync()
        {
            return await _context.Polists.ToListAsync();
        }

        public async Task<Polist> GetPolistByIdAsync(int id)
        {
            return await _context.Polists.FindAsync(id);
        }

        public Polist Update(Polist polistchanges)
        {
            Polist polist = _context.Polists.FirstOrDefault(e => e.PolistId == polistchanges.PolistId);
            if (polist != null)
            {
                //polist.PolistId = polistchanges.PolistId;
                polist.Po_code = polistchanges.Po_code;
                polist.Po_name = polistchanges.Po_name;
                polist.Weight = polistchanges.Weight;
                
            }

            ////var newpolist = _context.Polists.Attach(polistchanges);

            ////newpolist.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return polistchanges;
        }
    }
}
