import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// cmd: ng g c page/home;
// cmd: ng g c page/nav;


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
