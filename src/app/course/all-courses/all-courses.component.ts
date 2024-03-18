import { Component, OnDestroy, OnInit } from '@angular/core';
import { Courses, KindCourse } from '../courses.model';
import { Subscription, interval } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesServerService } from '../courses-server.service';
import Swal from 'sweetalert2';
import { Category } from '../../category.model';
import { CategoryServerService } from '../../category-server.service';

@Component({
  selector: 'app-all-courses',
  standalone: false,
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})

export class AllCoursesComponent implements OnInit {
  
  public createdByUsername: string;
  public rows: Courses[][] = [];
  public selectCourses: Courses;
  public allCourses: Courses[];
  //public filterCourses1: Courses[] = [];
  public allCategories:Category[];
  sidebarVisible: boolean = false;
  public filteredProductsList: Courses[];
  public filters: { [key: string]: string } = {};
  showFilters: boolean = false;



  constructor(private router: Router, private route: ActivatedRoute, private _courseServise: CoursesServerService,private _categoriesService:CategoryServerService ) { }

  ngOnInit(): void {
    // this.loadData();

    this._categoriesService.getAllCaregory().subscribe(res=>{
      this.allCategories=res;
    });

    this._courseServise.getAllCourses().subscribe(res => {
      this.allCourses = res;
     this.filteredProductsList=this.allCourses
      console.log(this.allCourses);
    });
  }
  // private loadData(): void {
   
  // }


  public courses(c: Courses): void {
    this.selectCourses = c;
    console.log(c.id, "id");

    this.router.navigate(["/course/course-details", c.id]);
  }
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  hideFilters() {
    this.showFilters = false;
  }



  filterCourses(filterType: string, event: any): void {
    const value = event.target.value;
    this.filters[filterType] = value;
    if (value === '') {
      // אם הערך הנבחר הוא ריק, אז אין צורך בפילטר
      delete this.filters[filterType]; // מחיקת הפילטר מהמערך
    }
    this.applyFilters();
    console.log(this.filteredProductsList);
  }

  applyFilters(): void {
    this.filteredProductsList = this.allCourses.filter(course => {
      return Object.keys(this.filters).every(key => {
        const value = this.filters[key].toLowerCase();
        switch (key) {
          case 'courseName':
            return course.name && course.name.toLowerCase().includes(value);
          case 'learningWay':
            return course.kindCourse?.toString() === value;
          case 'categoryId':
            return course.categoryId?.toString() === value;
          default:
            return true;
        }
      });
    });
  }



}