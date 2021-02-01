import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/categories/category';
import { Restaurant } from 'src/app/restaurants/restaurant';
import { Homepage } from './homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage$: Observable<Homepage>;
  restaurants$: Observable<Restaurant[]>;
  categories$: Observable<Category[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.homepage$ = this.api.getHomePage();
    this.restaurants$ = this.api.getRestaurants();
    this.categories$ = this.api.getCategories();
  }

}
