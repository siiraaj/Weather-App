import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';



const routes: Routes = [
  {
    path:'',
    component:CityComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'posts',
    component:PostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
