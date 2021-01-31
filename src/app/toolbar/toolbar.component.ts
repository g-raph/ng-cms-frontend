import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Category } from '../categories/category';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.categories$ = this.api.getCategories();
  }

}
