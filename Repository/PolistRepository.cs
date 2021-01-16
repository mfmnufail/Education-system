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

        public async Task<IEnumerable<Models.Polist>> GetPolistAsync()
        {
            return await _context.Polists.ToListAsync();
        }

        public async Task<Models.Polist> GetPolistByIdAsync(int id)
        {
            return await _context.Polists.FindAsync(id);
        }



        public Models.Polist Add(Polist polist)
        {
            //polist.PolistId = _context.Polists.Max(x => x.PolistId) + 1;

            _context.Polists.Add(polist);
            _context.SaveChanges();
            return polist;
        }

        public Models.Polist Delete(int id)
        {
            Polist polist = _context.Polists.FirstOrDefault(e => e.Id == id);
            if (polist != null)
            {
                _context.Polists.Remove(polist);
                _context.SaveChanges();
            }

            return (polist);
        }

        

        public Models.Polist Update(Polist polistchanges)
        {
            Polist polist = _context.Polists.FirstOrDefault(e => e.Id == polistchanges.Id);
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
