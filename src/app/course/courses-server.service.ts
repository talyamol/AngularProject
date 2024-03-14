import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesServerService {


  constructor(private http: HttpClient) {}

  public getAllCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>("https://localhost:7140/api/Course");
  }

  public getCourseById(id: number): Observable<Courses> {
    return this.http.get<Courses>(`https://localhost:7140/api/Course/${id}`)
  }
  public addCourse(course: Courses): Observable<Courses> {
    return this.http.post<Courses>(`https://localhost:7140/api/Course`,course)
  }

  public editCourse(course: Courses): Observable<Courses> {
    return this.http.put<Courses>(`https://localhost:7140/api/Course/${course.id}`, course);
  }

  public deleteCourse(id: number): Observable<Courses> {
    return this.http.delete<Courses>(`https://localhost:7140/api/Course/${id}`);
}


}
