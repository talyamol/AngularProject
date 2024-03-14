namespace AngularServer
{

    public enum KindCourse
    {
        Zoom,
        Frontal
    }
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int Count { get; set; }
        public DateTime DateStart { get; set; }
        public List <string> Syllabus { get; set; }
        public int LecturerId { get; set; }
        public string ImageUrl { get; set; }
        public KindCourse KindCourse { get; set; }
        public Course()
        {
            
        }
        public Course(int id, string name, int categoryId, int count, DateTime dateStart, List<string> syllabus, int lecturerId, string imageUrl)
        {
            Id = id;
            Name = name;
            CategoryId = categoryId;
            Count = count;
            DateStart = dateStart;
            Syllabus = syllabus;
            LecturerId = lecturerId;
            ImageUrl = imageUrl;
        }
    }
}
