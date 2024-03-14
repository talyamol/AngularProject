import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServerService } from '../../category-server.service';
import { CoursesServerService } from '../courses-server.service';
import { Courses } from '../courses.model';
import { Category } from '../../category.model';
import { DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-course',
  standalone: false,
  providers:[{ provide: MAT_DATE_LOCALE, useValue: 'he-IL' },],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {

  public addForm: FormGroup;
  public allCategories:Category[];
  syllabusControl: FormControl;
  inputArray: string[] = [];
  inputArrayControls: FormControl[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _categoriesService: CategoryServerService,
    private _courseService: CoursesServerService,
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) {this.syllabusControl = new FormControl('');}
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(5),this.courseNameValidator()]],
      'count': ['', Validators.required],
      'date': ['', Validators.required],
      // 'syllabus': this.formBuilder.array([this.createSyllabusControl()]),
      'category': ['', Validators.required],
    });
    this.categories();
    this._adapter.setLocale(this._locale);
    this.inputArrayControls = this.inputArray.map(input => new FormControl(input));
  }

  getDateFormatString(): string {
    return 'YYYY/MM/DD';
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

  courseNameValidator() {
    return (control) => {
      const pattern = /^[a-zA-Z\- ]+$/;
      if (pattern.test(control.value)) {
        return null;
      } else {
        return { invalidCourseName: true };
      }
    };
  }

  

  onSubmit(): void {
    console.log(this.addForm.value);

    let c: Courses = this.addForm.value;
    c.syllabus=this.inputArray;
    this._courseService.addCourse(c).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.saveChange();  
    this.router.navigate(['/course/all-courses']);
  }

  saveChange() {
    Swal.fire({
      title: 'הקורס נוסף בהצלחה',
      showCancelButton: true,
      // confirmButtonText: 'כן, התנתק',
      // cancelButtonText: 'ביטול',
     
       reverseButtons: true
     }).then((result) => {
       if (result.isConfirmed) {
           this.router.navigate(['/course/all-courses']);
      
       }
     });
  }



  // private createSyllabusControl(): FormGroup {
  //   return this.formBuilder.group({
  //     syllabus: ['', Validators.required],
  //   });
  // }

  // get syllabusArray() {
  //   return this.addForm.get('syllabus') as FormArray;
  // }

  // onSyllabusValueChanged(index: number) {
  //   const currentControl = this.syllabusArray.at(index);
  //   const nextControl = this.syllabusArray.at(index + 1);

  //   if (currentControl.value === '' && nextControl) {
  //     // אם התיבה הנוכחית ריקה ויש תיבה הבאה, מחק את התיבה הבאה
  //     this.syllabusArray.removeAt(index + 1);
  //   }
  // }

  // addsyllabusField() {
  //   this.syllabusArray.push(this.createSyllabusControl());
  // }

}