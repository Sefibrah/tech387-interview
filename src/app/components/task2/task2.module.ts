import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2RouterModule } from './task2-router.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Task2Component } from './task2.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';



@NgModule({
  declarations: [
    NavbarComponent,
    Task2Component,
    GroceryListComponent,
    GroceryFormComponent
  ],
  imports: [
    CommonModule,
    Task2RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    Task2Component,
    GroceryListComponent,
    GroceryFormComponent
  ]
})
export class Task2Module { }
