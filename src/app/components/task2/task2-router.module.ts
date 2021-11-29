import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';
import { Task2Component } from './task2.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

export const routes: Routes = [
  {
    path: 'task2', component: Task2Component, children: [
      { path: '', redirectTo: '/task2/grocery-list', pathMatch: 'full' },
      { path: 'grocery-list', component: GroceryListComponent },
      { path: 'grocery-form/:id', component: GroceryFormComponent },
      { path: 'grocery-form', component: GroceryFormComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'task2/grocery-list' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Task2RouterModule { }
