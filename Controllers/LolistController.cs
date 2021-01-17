using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ObeSystem.Interfaces;
using ObeSystem.Models;

namespace ObeSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LolistController : ControllerBase
    {
        private readonly ILolistRepository _lolistRepository;

        public LolistController(ILolistRepository lolistRepository)
        {
            _lolistRepository = lolistRepository;    
        }


        // GET: api/Lolist
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lolist>>> GetLolists()
        {
            var lolist = await _lolistRepository.GetLolistAsync();
            return Ok(lolist);

        }


        [HttpPost]
        public  ActionResult<Lolist> CreatePostAsync(Lolist lolist)
        {
            Lolist newlolist = _lolistRepository.Add( lolist);
            return Ok(newlolist);
        }


        [HttpPut("{id?}")]
        public ActionResult<Lolist> UpdateLolist(Lolist lolist)
        {
            Lolist lolistchanges = _lolistRepository.Update(lolist);
            return Ok(lolistchanges);
        }




        //GET: api/Lolist/5
        [HttpGet("{id?}")]
        public async Task<ActionResult<Lolist>> GetLolist(int id)
        {
            return await _lolistRepository.GetLolistByIdAsync(id);
        }


        public ActionResult<Lolist> DeleteLo(int id)
        {
            Lolist deletedlist = _lolistRepository.Delete(id);
            return Ok(deletedlist);
        }



    }
}







