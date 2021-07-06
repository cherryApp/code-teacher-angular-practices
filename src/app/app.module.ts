import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// cmd: ng g c page/nav;
// cmd: ng g c page/home;
// cmd: ng g c page/login;
// cmd: ng g c page/users;
// cmd: ng g c page/user-edit;
// cmd: ng g c page/forbidden;
// cmd: ng g service service/jwt-interceptor;

// cmd: ng g c page/test1;
// cmd: ng g c page/test2;
// cmd: ng g c page/test3;

// cmd: ng g c page/test4;
// cmd: ng g c page/test5;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './page/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { Test1Component } from './page/test1/test1.component';
import { Test2Component } from './page/test2/test2.component';
import { Test3Component } from './page/test3/test3.component';
import { Test4Component } from './page/test4/test4.component';
import { Test5Component } from './page/test5/test5.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    UserEditComponent,
    ForbiddenComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
