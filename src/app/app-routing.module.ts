import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Problem3Component } from './problem3/problem3.component';

const routes: Routes = [
  {path:'',component:Problem3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
