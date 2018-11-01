import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CityComponent } from './city/city.component';

import { HttpClientModule } from '@angular/common/http';  // <-Add here


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailsComponent,
    SidebarComponent,
    CityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
