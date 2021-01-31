import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageComponent } from './pages/page/page.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  // {path: ':id', component: PageComponent},
  {path: 'restaurants', component: RestaurantListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
