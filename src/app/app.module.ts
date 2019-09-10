import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgBook2Module } from './ng-book2/ng-book2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBook2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
