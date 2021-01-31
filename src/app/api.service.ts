import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any> {
    const url = `http://localhost:1337/restaurants`;
    return this.http.get(url);
  }

  getCategories(): Observable<any> {
    const url = `http://localhost:1337/categories`;
    return this.http.get(url);
  }

  getPage(id: string): Observable<any> {
    const url = `http://localhost:1337/pages/${id}`;
    return this.http.get(url);
  }
}
