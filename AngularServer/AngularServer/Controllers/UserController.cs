using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        static public List<User> Users = new List<User> {
            new User { Id=1,Name="Tehila",Email="6tehila@gmail.com",Password="02865",Address="gane gad"},
            new User { Id=2,Name="Talya",Email="talyamolson@gmail.com",Password="12859",Address="hatomer"},
            new User { Id=3,Name="Adi",Email="1524a@gmail.com",Password="123456",Address="hazon ish"},
            new User { Id=4,Name="Shirel",Email="s0533135@gmail.com",Password="8795",Address="arar"},
            new User { Id=5,Name="Michal",Email="michal123@gmail.com",Password="fgh852",Address="emek izrael"}
        };
        static int count = 6;
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return Users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            var user = Users.Find(x => x.Id == id);
            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User user)
        {
            Users.Add(new User {Address=user.Address,Email=user.Email,Name=user.Name,Password=user.Password,Id=count++ });
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User user)
        {
            var user1 = Users.Find(x => x.Id == id);
            user1.Email = user.Email;
            user1.Password = user.Password;
            user1.Name = user.Name;
            user1.Address = user.Address;
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user1 = Users.Find(x => x.Id == id);
            Users.Remove(user1);
        }
    }
}
