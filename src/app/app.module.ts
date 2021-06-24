import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// test 1 without terminal.
// test 2 wt.
// test 3 wt.
// cmd: echo 'test';
// cmd: echo 'test222';
// cmd: npm i;
// hello world;
// hello selection;

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
