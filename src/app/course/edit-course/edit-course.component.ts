import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Courses } from '../courses.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesServerService } from '../courses-server.service';
import { CategoryServerService } from '../../category-server.service';
import { Category } from '../../category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course',
  standalone: false,
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent implements OnInit {
  editForm: FormGroup;
  course: Courses
  syllabusControl: FormControl;
  inputArray: string[] = [];
  inputArrayControls: FormControl[] = [];
  public allCategories:Category[];

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private _courseService: CoursesServerService,private _categoriesService:CategoryServerService) { this.syllabusControl = new FormControl(''); }

  ngOnInit(): void {
    // יצירת הטופס ומילויו בנתוני הקורס מה-LocalStorage
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      count: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', Validators.required],
      // syllabus: this.formBuilder.array([this.createSyllabusControl()]),
      syllabusControl: [''], 
       //syllabus: this.formBuilder.array([]),
      category: ['', Validators.required],
    });
    this.inputArrayControls = this.inputArray.map(input => new FormControl(input));

    const courseData = localStorage.getItem('course');
    if (courseData) {
      console.log(courseData)
      const course = JSON.parse(courseData);
      console.log(course)
      //this.editForm.patchValue(course);
      this.editForm.patchValue({
        // שדות הטופס צריכים להיות תואמים לשמות השדות באובייקט course
        name: course.name,
        date: course.dateStart,
        syllabusControl: course.syllabus, 
        category:course.categoryId,
        count:course.count
      });
    
      console.log("end")

      
    }
  }

  saveChange() {
    Swal.fire({
      title: '?לשמור שינויים',
      showCancelButton: true,
      confirmButtonText: 'שמור',
      cancelButtonText: 'ביטול',
      
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.onSave()
        this.router.navigate(['/']); // ניתוב לדף הבית
      }

      this.router.navigate(['/']); // ניתוב לדף הבית
      this.onCancel();
    });
  }


  public categories() {
    this._categoriesService.getAllCaregory().subscribe(res=>{
        this.allCategories = res;
        console.log(this.allCategories);
      });
}

  addInput(control: FormControl) {
    this.inputArray.push(control.value);
    this.inputArrayControls.push(new FormControl(''));
  }
  private createSyllabusControl(): FormGroup {
    return this.formBuilder.group({
      syllabus: ['', Validators.required],
    });
  }

  // פונקציה זו נקראת כאשר המשתמש שומר את השינויים
  onSave(): void {
    console.log(this.editForm.value);
    this.route.params.subscribe((param) => {
      let c: Courses = this.editForm.value;
      c.syllabus=this.inputArray;
      this._courseService.editCourse(c).subscribe({
        next: (res) => {
          this.course = res;
          console.log(this.course);
        },
        error: (err) => {
          console.log(err)
        }
      });
    })
    // כאן תוכל להשתמש בשירותים או לשלוח את הנתונים באופן אחר לשרת
  }
  // countValidator() {
  //   return (control) => {
  //     const pattern = /^[0-9\- ]+$/;
  //     if (pattern.test(control.value)) {
  //       return null;
  //     } else {
  //       return { invalidCount: true };
  //     }
  //   };
  // }




  onCancel() {
    console.log(' ביטול שינויים');

    // דוגמה לאיפוס הטופס
    //this.editForm.reset();
    const courseData = localStorage.getItem('course');
    const courseD = JSON.parse(courseData)
    // דוגמה לניווט בחזרה לעמוד הקודם
    this.router.navigate(['/course/course-details', courseD.id]);
  }


}

