import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './components/task1/task1.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Task3Component } from './components/task3/task3.component';
import { FormsModule } from '@angular/forms';
import { Task2Module } from './components/task2/task2.module';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    NavComponent,
    Task3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    Task2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
