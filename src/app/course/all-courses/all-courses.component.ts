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

export class AllCoursesComponent implements OnInit, OnDestroy {
  
  public createdByUsername: string;
  public rows: Courses[][] = [];
  public selectCourses: Courses;
  public allCourses: Courses[];
  public filterCourses1: Courses[] = [];
  public allCategories:Category[];
  sidebarVisible: boolean = false;


  private refreshSubscription: Subscription;
  public value: number = 0; // Difficulty level filter value
  public kind: KindCourse; // Preparation time filter value
  public selectedCategories: number[] = []; // Selected categories for filtering
  public sidebarVisible2: boolean = false;
  public disabled = false;
  public max = 5;
  public min = 0;
  public showTicks = true;
  public step = 0;
  public thumbLabel = true;
  public courseNameFilter: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private _courseServise: CoursesServerService,private _categoriesService:CategoryServerService ) { }

  ngOnInit(): void {
    this.loadData();
    this.setupDataRefresh();
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  private loadData(): void {
    this._courseServise.getAllCourses().subscribe(res => {
      this.allCourses = res;
      this.filterCourses1 = [...res];
      console.log(this.allCourses);
    });
  }

  private setupDataRefresh(): void {
    this.refreshSubscription = interval(60000).subscribe(() => {
      this.loadData();
    });
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
}
  public courses(c: Courses): void {
    this.selectCourses = c;
    console.log(c.id, "id");

    this.router.navigate(["/course/course-details", c.id]);
  }

  public filterCourses(): void {
    this.filterCourses1 = this.allCourses.filter(course => {
      const kindCourseFilter = this.kind === 0 || course.kindCourse === this.kind;
      const categoryFilter = this.selectedCategories.length === 0 || this.selectedCategories.includes(course.categoryId);
      const nameFilter = this.courseNameFilter === '' || course.name.toLowerCase().includes(this.courseNameFilter.toLowerCase());
      return kindCourseFilter && categoryFilter && nameFilter;
    });
  }

  public filterByName(): void {
    this.filterCourses();
  }
  public filterByCategory(category: number, event: any): void {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.filterCourses();
  }
  public categories() {
    this._categoriesService.getAllCaregory().subscribe(res=>{
        this.allCategories = res;
        console.log(this.allCategories);
      });
}}

// export class AllCoursesComponent implements OnInit{
  
//   public createdByUsername: string;
//   public rows: Courses[][] = [];
//   public selectCourses: Courses;
//   public allCourses: Courses[];
//    filterCourses1:Courses[]=[];
//   private refreshSubscription: Subscription;
//   value: number = 0; // Difficulty level filter value
//   kind:KindCourse // Preparation time filter value
//   selectedCategories: number[] = []; // Selected categories for filtering
//   sidebarVisible2: boolean = false;
//   disabled = false;
//   max = 5;
//   min = 0;
//   showTicks = true;
//   step = 0;
//   thumbLabel = true;
//   courseNameFilter: string = '';

//   constructor(private router: Router,private route: ActivatedRoute, private _courseServise: CoursesServerService) { }
//   ngOnInit(): void {
//     this.loadData(); // טען את המידע בהתחלה
//     this.setupDataRefresh(); // הפעל רענון אוטומטי של המידע
//   }


//   ngOnDestroy(): void {
//     // הפסק לרענן את המידע כאשר הקומפוננטה נסגרת
//     if (this.refreshSubscription) {
//       this.refreshSubscription.unsubscribe();
//     }
//   }

//   private loadData(): void {
//     this._courseServise.getAllCourses().subscribe(res=>{
//         this.allCourses = res;
//         this.filterCourses1=[...res];
//         console.log(this.allCourses);
//       });
//   }

//   private setupDataRefresh(): void {
//     // הפעל פונקציה שמרעינה את המידע בקביעות
//     this.refreshSubscription = interval(60000).subscribe(() => {
//       this.loadData();
//     });
//   }

//   public courses(c: Courses): void {
//     this.selectCourses = c;
//     console.log( c.id,"id");
    
//     this.router.navigate(["/course/course-details", c.id]);
//   }


//   filterCourses(): void {
//     this.filterCourses1 = this.allCourses.filter(course => {
//         const kindCourseFilter = this.kind === 0 || course.kindCourse === this.kind;
//         const categoryFilter = this.selectedCategories.length === 0 || this.selectedCategories.includes(course.categoryId);
//         const nameFilter = this.courseNameFilter === '' || course.name.toLowerCase().includes(this.courseNameFilter.toLowerCase());
//         return kindCourseFilter && categoryFilter && nameFilter;
//     });
//     this.filterByCategory(); // קריאה לפונקציה לסינון לפי הקטגוריה בכל פעם שהוא מתבצע
//   }
  
//   filterByName(): void {
//     this.filterCourses(); // קריאה לפונקציה לסינון הכללי בכל פעם שהוא מתבצע
//   }
  
//   filterByCategory(category: number = null): void {
//     if (category !== null) {
//       const index = this.selectedCategories.indexOf(category);
//       if (index !== -1) {
//         this.selectedCategories.splice(index, 1);
//       } else {
//         this.selectedCategories.push(category);
//       }
//     }
//     this.filterCourses(); // קריאה לפונקציה לסינון הכללי בכל פעם שהוא מתבצע
//   }
// }