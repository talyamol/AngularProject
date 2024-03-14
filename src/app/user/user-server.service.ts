import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServerService {

  constructor(private http:HttpClient) { }
  
  public getAllUser(): Observable<Users[]> {
    return this.http.get<Users[]>("https://localhost:7140/api/User");
  }

  public getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`https://localhost:7140/api/User/${id}`)
  }
  public addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`https://localhost:7140/api/User`,user)
  }

  public editUser(user: Users): Observable<Users> {
    return this.http.put<Users>(`https://localhost:7140/api/User/${user.id}`, user);
  }

  public deleteUser(id: number): Observable<Users> {
    return this.http.delete<Users>(`https://localhost:7140/api/User/${id}`);



}



}
