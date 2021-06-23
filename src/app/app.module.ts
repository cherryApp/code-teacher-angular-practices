import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// cmd: ng g c page/home;
// cmd: ng g c page/nav;
// cmd: ng g c page/users;
// cmd: ng g c page/user-edit;



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './page/nav/nav.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
