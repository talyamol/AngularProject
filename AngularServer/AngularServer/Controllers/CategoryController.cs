using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
       static public List<Category> Categories = new List<Category>()
        {
            new Category(){Id=1,Name="Python",RoutingIcon=""},
            new Category(){Id=2,Name="Algoritmim",RoutingIcon=""},
            new Category(){Id=3,Name="C++",RoutingIcon=""},
            new Category(){Id=4,Name="C",RoutingIcon=""},
            new Category(){Id=5,Name="R",RoutingIcon=""},
            new Category(){Id=6,Name="WebSec",RoutingIcon=""},
            new Category(){Id=7,Name="AI",RoutingIcon=""}
           // new Category(){Id=8,}
        };

        static int count = 8;



        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return Categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            var category = Categories.Find(x => x.Id == id);
            return category;
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category category)
        {
            Categories.Add(new Category { Id=count++,Name=category.Name,RoutingIcon=category.RoutingIcon});
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Category category)
        {
            var category1 = Categories.Find(x => x.Id == id);
            category1.Name = category.Name;
            category1.RoutingIcon = category.RoutingIcon;

        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var category1 = Categories.Find(x => x.Id == id);
            Categories.Remove(category1);
        }
    }
}
