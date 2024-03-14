import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesServerService } from './courses-server.service';
import { HttpClientModule } from '@angular/common/http';
import { CourseRoutingModule } from './course-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule,MatDatepickerIntl} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card';
import { KindCoursePipe } from './kind-course.pipe';



@NgModule({
  declarations: [AddCourseComponent,EditCourseComponent,AllCoursesComponent,CourseDetailsComponent,KindCoursePipe],
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule,MatFormFieldModule ,MatSelectModule,MatButtonModule,MatIconModule,MatInputModule,MatDividerModule,
    MatDatepickerModule,MatCardModule],
  providers:[CoursesServerService,provideNativeDateAdapter()],
  exports:[CourseRoutingModule]
})
export class CourseModule { }
