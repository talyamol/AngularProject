namespace AngularServer
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        static int id = 6;
        public User()
        {
           // id++;
        }
        public User( string name, string email, string password, string address)
        {
           // Id = id++;
            Name = name;
            Email = email;
            Password = password;
            Address = address;
        }
    }
}
