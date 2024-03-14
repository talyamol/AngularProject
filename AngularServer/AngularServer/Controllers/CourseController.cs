using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {

        static public List<Course> Courses = new List<Course>() {
            new Course(){CategoryId=1,Name="Data.Intro - מבוא לניתוח נתונים בפייתון",Id=1,Count=10,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Zoom,LecturerId=2,ImageUrl="../../../../assets/images/PYTHON1.png",
                Syllabus=new List<string>(){ "היכרות עם שפת פייתון","משתנים","מחרוזות","תנאים","פונקציות","רשימות","לולאות","טיפוסים מתקדמים של מבני נתונים","קבצים" } },

            new Course(){CategoryId=1,Name="Self.Py - הדרך שלך ללמוד פייתון",Count=15,Id=2,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Zoom,LecturerId=1,ImageUrl="../../../../assets/images/PYTHON2.png",
                Syllabus=new List<string>(){ "היכרות עם תחום מדע הנתונים ושלבי העבודה של מדעני ומדעניות נתונים ",
                    "צעדים ראשונים עם pandas: עבודה עם טבלאות, הצגה ושליפת נתונים",
                    "מושגים בסטטיסטיקה תיאורית: מדדי מרכז, מדדי פיזור",
                    "הצגת נתונים חזותית: גרף עמודות, גרף קווי, גרף פיזור",
                    "ניתוח נתונים מתקדם: מיזוג טבלאות וחלוקה לקבוצות" }},

            new Course() { CategoryId = 1,Name="צעדים ראשונים במדעי המחשב ותכנות בפייתון",Id=3,Count=12,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Zoom,LecturerId = 1,ImageUrl="../../../../assets/images/PYTHON3.png",
             Syllabus=new List<string>(){ "מהי השיטה הבינארית ואיך מחשבים משתמשים בה?",
             "מהי שפת התכנות פייתון (Python) וכיצד כותבים בה פקודות בסיסיות?",
             "איך מחפשים מידע ביעילות?",
             "מהי הצפנת מידע ואיך עושים זאת?",
             "כיצד מתבצע ייצוג ועיבוד תמונה?"} },

            new Course(){CategoryId=2,Id=4,Count=20, Name="אלגוריתמים",DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Zoom,LecturerId=5,ImageUrl="../../../../assets/images/Algo.png",
              Syllabus=new List<string>(){ "תכירו את השיטות והעקרונות הבסיסיים בפיתוח אלגוריתמים:\r\nסריקת גרפים, חמדנות, תכנון דינמי, הפרד-ומשול, זרימות וחתכים.",
              "תוכלו ליישם שיטות אלו ולפתח אלגוריתם חדש לבעיה נתונה.",
              "מדדי יעילות של אלגוריתמים: סיבוכיות זמן ומקום",
              "תוכלו לתרגם בעיות מעשיות משפה יומיומית לשפה מתמטית מדויקת.",
              "תדעו להתאים לבעיה נתונה אלגוריתם שנלמד בקורס, לעיתים תוך ביצוע התאמות נדרשות.",
              "תדעו להוכיח או להפריך את נכונותו של אלגוריתם, ולנתח את זמן הריצה שלו."} },

            new Course{CategoryId=3,Id=5,Name="מבוא לתכנות בשפת C++",Count=22,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Frontal,LecturerId=3,ImageUrl="../../../../assets/images/C (2).png",
            Syllabus=new List<string>(){"מבוא לעקרונות התכנות הפרוצדורלי","ביטויים לוגיים","תנאים","לולאות","מיומנויות דיבאג"}
            },

            new Course(){CategoryId=4,Id=6,Name="מבוא למדעי המחשב בשפת C",Count=20,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Frontal,LecturerId=4,ImageUrl="../../../../assets/images/C.png",
           Syllabus=new List<string>(){"השלבים בפתרון בעיית מחשב: הגדרת הבעיה, תכנון האלגוריתם, יישום האלגוריתם.",
                "מרכיבי שפת התכנות C: משתנים, לולאות, משפטי תנאי, ביטויים אריתמטיים וביטוים לוגיים, תכנות מבני באמצעות פונקציות",
                "מדדי יעילות של אלגוריתמים: סיבוכיות זמן ומקום",
                "אלגוריתמים למיון וחיפוש בינארי",
                "פתרון בעיות באמצעות רקורסיה ואלגוריתמי מיון רקורסיביים"  } 
            },
            new Course(){CategoryId=5,Id=7,Name="מבוא לתכנות ועיבוד נתונים בשפת R",Count=12,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Frontal,LecturerId=7,ImageUrl="../../../../assets/images/R.png",
           Syllabus=new List<string>(){ "אילו מבני נתונים קיימים ב-R לשמירת מידע?", "כיצד יוצרים גרפיקה ברמה גבוהה?", "כיצד מבצעים ניתוחים סטטיסטיים?",
               "כיצד מתכנתים ב-R?","גישות מתקדמות לעיבוד מסדי נתונים גדולים.","כיצד לארגן קוד לתהליך עיבוד נתונים, מרעיון ליישום." }
        
            }, new Course(){CategoryId=6,Id=8,Name="WebSec – לזהות חולשות. לבנות הגנות.",Count=8,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Zoom,LecturerId=8,ImageUrl="../../../../assets/images/S.png",
            Syllabus=new List<string>(){ "רקע בסיסי בעולם הסייבר: היכרות עם סוגי תוקפים, המניעים שלהם ואיומים על מידע.",
                "היכרות עם חולשות ומתקפות בעולם אבטחת האינטרנט: איך לחשוב כמו תוקף, דרכים למימוש מתקפות, נזקים אפשריים ודרכי הגנה והתמודדות עם המתקפות.",
            "חשיפה למתקפות מגוונות ומרתקות שרובן מסווגות בתור המתקפות המסוכנות ביותר על אפליקציות ווב.",
            "הצד החוקי והבלתי חוקי בעולם אבטחת המידע."}
            }, new Course(){CategoryId=7,Id=9,Name="מבוא לבינה מלאכותית: מתאוריה לפרקטיקה",Count=15,DateStart=new DateTime(2024,03,05),KindCourse=KindCourse.Zoom,LecturerId=9,ImageUrl="../../../../assets/images/AI.png",
           Syllabus=new List<string>(){ "להכיר את המושגים והאתגרים המרכזיים בתחום הבינה מלאכותית.",
           "ללמוד מגוון שיטות לפתרון בעיות בבינה מלאכותית, בדגש על אלגוריתמים הניתנים ליישום בפועל.",
           "להבין את המודלים התיאורטיים לייצוג ידע ובעיות בעולם הבינה מלאכותית ולדעת ליישמם על בעיות אמיתיות.",
           "להבין את הסוגיות האתיות המרכזיות העלות מהמחקר בבינה מלאכותית והגישות הפילוסופיות הרלוונטיות."} }
        };
        static int count = 10;

        // GET: api/<CourseController>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return Courses;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public  Course Get(int id)
        {
            var c=Courses.Find(x=>x.Id==id);
            return c;
        }

        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] Course course)
        {
            //Courses.Add(new Course { Syllabus=course.Syllabus,Name=course.Name,CategoryId=course.CategoryId,Id=count++
              //  ,DateStart=course.DateStart,ImageUrl=course.ImageUrl,KindCourse=course.KindCourse,LecturerId=course.LecturerId});
              Courses.Add(course);
        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Course course)
        {
            var c = Courses.Find(x => x.Id == id);
            c.Id = course.Id;
            c.Name = course.Name;
            c.LecturerId = course.LecturerId;
            c.Count = course.Count;
            c.KindCourse = course.KindCourse;
            c.DateStart = course.DateStart;
            c.ImageUrl = course.ImageUrl;
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var c=Courses.Find(x=>x.Id==id);
            Courses.Remove(c);
        }
    }
}
