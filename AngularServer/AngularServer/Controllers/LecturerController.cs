using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
       static public List<Lecturer>Lecturers=new List<Lecturer>() {

             new Lecturer{ Id = 1, Name = "Tehila", Email = "6tehila@gmail.com", Password = "1234" ,Address="Bnei Brak"},
            new Lecturer{ Id = 2, Name = "Talya", Email = "talyamolson@gmail.com", Password ="5678",Address="Zichron Yakov" },
            new Lecturer{ Id = 3, Name = "Alice", Email = "alice@gmail.com", Password = "9012",Address="Bnei Brak"},
            new Lecturer{ Id = 4, Name = "Sarah", Email = "sarah@gmail.com", Password = "3456",Address="TLV"},
            new Lecturer{ Id = 5, Name = "David", Email = "david@gmail.com", Password ="7890" ,Address="Jerusalem"} ,
            new Lecturer{Id = 6, Name = "Emily", Email = "emily@gmail.com", Password = "2345",Address="Modiyn"},
            new Lecturer{Id = 7, Name = "Michael", Email = "michael@gmail.com", Password ="6789" ,Address="Afula"},
            new Lecturer{ Id = 8, Name = "Sophia", Email = "sophia@gmail.com", Password = "123456",Address="Zichron Yaakov"},
            new Lecturer{ Id = 9, Name = "Daniel", Email = "daniel@gmail.com", Password ="654321",Address="Chazor" },
            new Lecturer{Id = 10, Name = "Emma", Email = "emma@gmail.com", Password = "13579",Address="TLV"},
            new Lecturer{Id = 11, Name = "AAA", Email = "AAA1111@gmail.com", Password = "1111",Address="TLV"}

        };
        static int count = 12;

        // GET: api/<LecturerController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return Lecturers;
        }

        // GET api/<LecturerController>/5
        [HttpGet("{id}")]
        public Lecturer Get(int id)
        {
           var lecaturer=Lecturers.Find(x => x.Id == id);
            return lecaturer;
        }

        // POST api/<LecturerController>
        [HttpPost]
        public void Post([FromBody]Lecturer lecturer)
        {
            Lecturers.Add(new Lecturer { Address = lecturer.Address, Email = lecturer.Email, Name = lecturer.Name, Password = lecturer.Password, Id = count++ });

           
        }

        // PUT api/<LecturerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Lecturer lecturer)
        {
            var l=Lecturers.Find(x=>x.Id == id);
            l.Email= lecturer.Email;
            l.Password= lecturer.Password;
            l.Name= lecturer.Name;
        }

        // DELETE api/<LecturerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var l = Lecturers.Find(x => x.Id == id);
            Lecturers.Remove(l);
        }
    }
}
