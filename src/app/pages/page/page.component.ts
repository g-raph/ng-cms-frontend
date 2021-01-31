import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page$: Observable<any>;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.page$ = this.api.getPage(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot);
    this.page$.subscribe(console.log);
  }

}
