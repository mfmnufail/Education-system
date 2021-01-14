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
    public class PolistController : ControllerBase
    {

        private readonly IPolistRepository _polistRepository;

        public PolistController(IPolistRepository polistRepository)
        {
            _polistRepository = polistRepository;
        }


        // GET: api/Polist
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Polist>>> GetPolists()
        {
            var polist = await _polistRepository.GetPolistAsync();
            return Ok(polist);

        }


        [HttpPost]
        public ActionResult<Polist> CreatePostAsync(Polist polist)
        {
            Polist newpolist = _polistRepository.Add(polist);
            return Ok(newpolist);
        }


        [HttpPut("{id?}")]
        public ActionResult<Polist> UpdatePolist(Polist polist)
        {
            Polist polistchanges = _polistRepository.Update(polist);
            return Ok(polistchanges);
        }




        //GET: api/Polist/5
        [HttpGet("{id?}")]
        public async Task<ActionResult<Polist>> GetPolist(int id)
        {
            return await _polistRepository.GetPolistByIdAsync(id);
        }


        public ActionResult<Polist> DeleteLo(int id)
        {
            Polist deletedlist = _polistRepository.Delete(id);
            return Ok(deletedlist);
        }


    }
}
