import { NgModule } from '@angular/core';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { enterCourseGuard } from './enter-course.guard';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'edit-course', component: EditCourseComponent },
  { path: 'all-courses', component: AllCoursesComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent, canActivate: [enterCourseGuard] }]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]



})
export class CourseRoutingModule { }
