using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AQIController : ControllerBase
    {
        public AirContext Context { get; set; }

        public AQIController(AirContext context)
        {
             Context = context;
        }

        //CRUD

        [Route("PreuzmiKartice")]
        [HttpGet]
        public async Task<List<Favorites>> PreuzmiKartice()
        {
            return await Context.Fav.ToListAsync();
        }

        [Route("UpisKartice")]
        [HttpPost]
        public async Task UpisKartice([FromBody] Favorites fav)
        {
            Context.Fav.Add(fav);
            await Context.SaveChangesAsync();
        }

        [Route("UpdateKartice")]
        [HttpPut]
        public async Task IzmeniKarticu([FromBody] Favorites fav)
        {

            Context.Update<Favorites>(fav);
            await Context.SaveChangesAsync();
        }

        [Route("IzbrisiKartice/{id}")]
        [HttpDelete]
        public async Task IzbrisiKartice(int id){
            var fav = await Context.FindAsync<Favorites>(id);
            Context.Remove(fav);
            await Context.SaveChangesAsync();
        }

        [Route("UpisOpisa")]
        [HttpPost]
        public async Task UpisOpisa([FromBody] Description desc)
        {
            Context.Desc.Add(desc);
            await Context.SaveChangesAsync();
        }

        [Route("PreuzmiOpise")]
        [HttpGet]
        public async Task<List<Description>> PreuzmiOpise()
        {
            return await Context.Desc.ToListAsync();
        }
    }
}
