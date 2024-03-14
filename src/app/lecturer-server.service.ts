import { Injectable } from '@angular/core';
import { Lecturer } from './lecturer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LecturerServerService {

  constructor(private http:HttpClient) { }

  public getAllLecturer(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>("https://localhost:7140/api/Lecturer");
  }

  public getLecturerById(id: number): Observable<Lecturer> {
    return this.http.get<Lecturer>(`https://localhost:7140/api/Lecturer/${id}`)
  }
  public addLecturer(lecturer: Lecturer): Observable<Lecturer> {
    return this.http.post<Lecturer>(`https://localhost:7140/api/Lecturer`,lecturer)
  }

  public editLecturer(lecturer: Lecturer): Observable<Lecturer> {
    return this.http.put<Lecturer>(`https://localhost:7140/api/Lecturer/${lecturer.id}`, lecturer);
  }

  public deleteLecturer(id: number): Observable<Lecturer> {
    return this.http.delete<Lecturer>(`api/Lecturer${id}`);



}



}



