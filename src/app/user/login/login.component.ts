import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../user.model';
import { Lecturer } from '../../lecturer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServerService } from '../user-server.service';
import { LecturerServerService } from '../../lecturer-server.service';
import { Courses } from '../../course/courses.model';
import { CoursesServerService } from '../../course/courses-server.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public addForm: FormGroup;
  public allUsers: Users[];
  public allLecturers: Lecturer[]
  public allCourses: Courses[]
  hide = true;

  constructor(private router: Router, private route: ActivatedRoute, private _userServise: UserServerService, private _courseServise: CoursesServerService, private _lecturerService: LecturerServerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(4)]),
    });

    this.users();
    this.courses();

    this.route.params.subscribe((param) => {
      this._lecturerService.getAllLecturer().subscribe({
        next: (res) => {
          this.allLecturers = res;
          console.log(this.allLecturers);
        },
        error: (err) => {
          console.log(err)
        }
      });
    })

  }
  public users() {
    this.route.params.subscribe((param) => {
      this._userServise.getAllUser().subscribe({
        next: (res) => {
          this.allUsers = res;
          console.log(this.allUsers);
        },
        error: (err) => {
          console.log(err)
        }
      });
    })
  }

  public courses() {
    this.route.params.subscribe((param) => {
      this._courseServise.getAllCourses().subscribe({
        next: (res) => {
          this.allCourses = res;
          console.log(this.allCourses);
        },
        error: (err) => {
          console.log(err)
        }
      });
    })
  }

  public save() {
    // console.log("enter");

    const userName = this.addForm.get('name').value;
    const password = this.addForm.get('password').value;
    if (this.allUsers) {
      const user = this.allUsers.find(u => u.name === userName);
      let userJson = JSON.stringify(user)
      const user1 = localStorage.setItem("user", userJson)
      //   if (user) {
      //     if (user.password === password) {
      //       alert('Login successful!');
      //       this.router.navigate(['/course/all-courses']);
      //       // כאן תכתוב את הניווט לדף הרצוי לאחר ההתחברות המוצלחת
      //     } else if (this.addForm.get('courseName').value)
      //       this.router.navigate(['/course/all-courses']);
      //     else
      //       alert('Incorrect password!');
      //     // כאן תכתוב הודעת שגיאה למשתמש על סיסמה שגויה

      //   } else {
      //     console.log('User not found!');
      //     // כאן תכתוב הודעת שגיאה למשתמש על משתמש שלא קיים
      //     // ותבצע ניווט לדף הרשמה
      //     this.navigateToLoginPage(userName);
      //   }
      // }


      if (user) {
        if (user.password === password) {
          Swal.fire({
            title: 'התחברות מוצלחת',
            text: 'ברוך הבא!',
            icon: 'success',
            confirmButtonText: 'המשך'
          }).then(() => {
            this.router.navigate(['/course/all-courses']);
          });
        } else {
          Swal.fire({
            title: 'סיסמה שגויה',
            text: 'אנא נסה שנית',
            icon: 'error',
            confirmButtonText: 'אוקי'
          });
        }
      } else {
        Swal.fire({
          title: 'משתמש לא קיים',
          text: 'אנא הירשם לאתר',
          icon: 'error',
          confirmButtonText: 'הירשם כעת'
        }).then(() => {
          this.navigateToLoginPage(userName);
        });
      }
    }}

private navigateToLoginPage(username: string) {
    // מעבר לדף הכניסה והכנסת שם משתמש שגוי
    this.router.navigate(['/user/register'], { queryParams: { username } });
  }

  public enterLecturer() {
    const lecturerName = this.addForm.get('name').value;
    const password = this.addForm.get('password').value;
    if (this.allLecturers) {
      const l = this.allLecturers.find(u => u.name === lecturerName);
      let lecturerJson = JSON.stringify(l)
      const l1 = localStorage.setItem("lecturer", lecturerJson)
      if (l && this.shouldDisplayCourseName()) {
        console.log("Before adding control");
        this.addForm.addControl('courseName', new FormControl());
        console.log("After adding control");
        this.displayCourseName = true;
        //this.onInputBlur();
      }
    }

    //this.addForm.updateValueAndValidity();
  }
  onInputBlur() {
    this.router.navigate(["/course/all-courses"]);
  }

  // private loadData(): void {
  //   this._courseServise.getAllCourses().subscribe({
  //     next: (res) => {
  //       this.allCourses = res;
  //       console.log(this.allCourses);
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   });
  // }


  displayCourseName: boolean = false;
  shouldDisplayCourseName(): boolean {
    return !this.addForm.contains('courseName');
  }
  // startCountdown() {
  //   setTimeout(() => {
  //     // העבר את המשתמש לדף אחר (לדוגמה, 'other-page') לאחר 8 שניות
  //     this.router.navigate(["/course/all-courses"]);
  //   }, 8000); 
  // }

}