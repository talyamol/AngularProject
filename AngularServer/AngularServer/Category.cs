namespace AngularServer
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string RoutingIcon { get; set; }

        public Category() { }
        public Category(int id, string name, string url)
        {
            Id = id;
            Name = name;
            RoutingIcon = url;
        }
    }
}
