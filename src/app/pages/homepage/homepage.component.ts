import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Homepage } from './homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage$: Observable<Homepage>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.homepage$ = this.api.getHomePage();
  }

}
