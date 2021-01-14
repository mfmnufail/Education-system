using Microsoft.EntityFrameworkCore;
using ObeSystem.Interfaces;

using ObeSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObeSystem.Repository
{
    public class LolistRepository : ILolistRepository
    {
        

        private readonly AppDbContext _context;

        public LolistRepository(AppDbContext  context)
        {
            _context = context;   
        }

        

        public Lolist Add(Lolist lolist)
        {
            lolist.LolistId = _context.Lolists.Max(x => x.LolistId) + 1;

            _context.Lolists.Add(lolist);
            _context.SaveChanges();
            return lolist;
        }

       

        public async Task<IEnumerable<Models.Lolist>> GetLolistAsync()
        {
            return await _context.Lolists.ToListAsync();
        }

        public async Task<Models.Lolist> GetLolistByIdAsync(int id)
        {
            return await _context.Lolists.FindAsync(id);
        }

        public Lolist Update(Lolist lolistchanges)
        {
            Lolist lolist = _context.Lolists.FirstOrDefault(e => e.LolistId == lolistchanges.LolistId);
            if(lolist != null)
            {
                //lolist.LolistId = lolistchanges.LolistId;
                lolist.Lo_code = lolistchanges.Lo_code;
                lolist.Lo_name = lolistchanges.Lo_name;
                lolist.Weight = lolistchanges.Weight;
                lolist.Polists = lolistchanges.Polists;
            }

            ////var newlolist = _context.Lolists.Attach(lolistchanges);
           
            ////newlolist.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return lolistchanges;
        }


        public Lolist Delete(int id)
        {
            Lolist lolist = _context.Lolists.FirstOrDefault(e => e.LolistId == id);
            if(lolist != null)
            {
                _context.Lolists.Remove(lolist);
                _context.SaveChanges();
            }

            return (lolist);
        }

    }
}



