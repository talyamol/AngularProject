import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServerService {

  constructor(private http:HttpClient) { }

  public getAllCaregory(): Observable<Category[]> {
    return this.http.get<Category[]>("https://localhost:7140/api/Category");
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`https://localhost:7140/api/Category/${id}`)
  }
  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`https://localhost:7140/api/Category`,category)
  }

  public editCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`https://localhost:7140/api/Category/${category.id}`, category);
  }

  public deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`https://localhost:7140/api/Category/${id}`);







}


}
