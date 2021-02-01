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

  getCategory(id: string): Observable<any> {
    const url = `http://localhost:1337/categories/${id}`;
    return this.http.get(url);
  }

  getPages(): Observable<any> {
    const url = `http://localhost:1337/pages`;
    return this.http.get(url);
  }

  getPage(id: string): Observable<any> {
    const url = `http://localhost:1337/pages/${id}`;
    return this.http.get(url);
  }

  getRestaurant(id: string): Observable<any> {
    const url = `http://localhost:1337/restaurants/${id}`;
    return this.http.get(url);
  }

  getHomePage(): Observable<any> {
    const url = `http://localhost:1337/homepage`;
    return this.http.get(url);
  }

  getAboutPage(): Observable<any> {
    const url = `http://localhost:1337/about-page`;
    return this.http.get(url);
  }

  getContactPage(): Observable<any> {
    const url = `http://localhost:1337/contact-page`;
    return this.http.get(url);
  }
}
