import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './categories/category/category.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'about-us', component: AboutpageComponent},
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'contact', component: ContactpageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
