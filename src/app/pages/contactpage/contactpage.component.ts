import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Homepage } from '../homepage/homepage';
import { Page } from '../page';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {

  contactpage$: Observable<Page>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.contactpage$ = this.api.getContactPage();
  }

}
