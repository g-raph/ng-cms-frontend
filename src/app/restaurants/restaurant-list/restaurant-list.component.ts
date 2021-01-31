import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants$: Observable<Restaurant[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.restaurants$ = this.api.getRestaurants();
    this.restaurants$.subscribe(res => console.log(res));
  }

}
