import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// cmd: ng g c page/home;
// cmd: ng g c page/nav;
// cmd: ng g c page/users;


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavComponent } from './page/nav/nav.component';
import { UsersComponent } from './page/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
