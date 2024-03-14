import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesServerService } from '../courses-server.service';
import { Lecturer } from '../../lecturer.model';
import { LecturerServerService } from '../../lecturer-server.service';
import { Category } from '../../category.model';
import { CategoryServerService } from '../../category-server.service';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {

  public course: Courses
  public courseId: number
  public lecturer: Lecturer
  public createdByUsername: string;
  public isLiked: boolean = false;
  public category:Category
  constructor(private router: Router, private route: ActivatedRoute, private _courseServise: CoursesServerService, private _lecturerService: LecturerServerService,private _categoryService:CategoryServerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.courseId = param['id'];
      console.log(this.courseId);
      this._courseServise.getCourseById(this.courseId).subscribe({
        next: (res) => {
          this.course = res;
          console.log(this.course);
        },
        error: (err) => {
          console.log(err)
        }
      });
    })
  //  this.lecturerId();
this.categories();

    const lecturer = localStorage.getItem("lecturer");
    console.log(lecturer)
    if (lecturer) { this.DisplayEditCourse = true; }
  }

  public lecturerId() {
    const id=this.course.lecturerId;
    console.log(id, "id")
    
    this._lecturerService.getLecturerById(id).subscribe({
      next: (res) => {
        this.lecturer = res;
        console.log(this.lecturer);
      },
      error: (err) => {
        console.log(err)
      }
    });
 
  }
  public editCourse() {

    // const lecturer = localStorage.getItem("lecturer");
    let courserJson = JSON.stringify(this.course)
    const l1 = localStorage.setItem("course", courserJson)

    this.router.navigate(['/course/edit-course']);
  }

  DisplayEditCourse: boolean = false;
  // shouldDisplayEditCourse(): boolean {
  //   return !this.addForm.contains('courseName');
  // }

  toAllDetails() {
        // קוד הנדרש לנווט לדף הפרטים של הקורס
       }
       toggleLike() {
        if (!this.isLiked) {
          this.isLiked = true;
          setTimeout(() => {
            this.isLiked = false;
          }, 300); // 500 מילישניות = 0.5 שניות, זמן האנימציה
        }
      }
      public categories() {
        let c=this.course?.categoryId
        this._categoryService.getCategoryById(c).subscribe(res=>{
            this.category = res;
            console.log(this.category);
          });
    }
}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CoursesServerService } from '../courses-server.service';
// import { Lecturer } from '../../lecturer.model';
// import { LecturerServerService } from '../../lecturer-server.service';

// @Component({
//   selector: 'app-course-details',
//   templateUrl: './course-details.component.html',
//   styleUrls: ['./course-details.component.css']
// })
// export class CourseDetailsComponent implements OnInit {

//   public course: any;
//   public createdByUsername: string;
//   public DisplayEditCourse: boolean = false;
//   public isLiked: boolean = false;

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private courseService: CoursesServerService,
//     private lecturerService: LecturerServerService
//   ) {}

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       const courseId = params['id'];
//       this.courseService.getCourseById(courseId).subscribe(
//         (res: any) => {
//           this.course = res;
//           // אם יש נתונים שנוספים במערכת הצגת כאן
//           this.createdByUsername = ''; // הגדרת המשתנה שלך
//         },
//         error => {
//           console.error('Error fetching course:', error);
//         }
//       );
//     });

//     const lecturer = localStorage.getItem('lecturer');
//     if (lecturer) {
//       this.DisplayEditCourse = true;
//     }
//   }

//   toAllDetails() {
//     // קוד הנדרש לנווט לדף הפרטים של הקורס
//   }

//   editCourse() {
//     // קוד הנדרש לעריכת הקורס
//   }

//   toggleLike() {
//     this.isLiked = !this.isLiked;
//   }
// }

