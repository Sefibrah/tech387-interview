import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task1Component } from './components/task1/task1.component';
import { Task3Component } from './components/task3/task3.component';

const routes: Routes = [
  { path: 'task1', component: Task1Component },
  {
    path: '',
    loadChildren: () => import('./components/task2/task2.module').then(m => m.Task2Module)
  },
  { path: 'task3', component: Task3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
