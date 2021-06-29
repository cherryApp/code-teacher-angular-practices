import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// cmd: ng g c page/home;
// cmd: ng g c page/users;
// cmd: ng g c page/nav;
// cmd: ng g c page/forbidden;
// cmd: ng g service service/jwt-interceptor;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { NavComponent } from './page/nav/nav.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    ForbiddenComponent,
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
