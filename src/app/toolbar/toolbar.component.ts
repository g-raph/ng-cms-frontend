import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Category } from '../categories/category';
import { Page } from '../pages/page';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title = 'Angular CMS frontend';
  menuItems = [
    {name: 'About us', link: '/about-us'},
    {name: 'Restaurants', link: '/restaurants'},
    {name: 'Contact us', link: '/contact'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
