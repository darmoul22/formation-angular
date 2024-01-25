import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Component1Component} from "./component-1/component-1.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'component1'
  },
  {
    path: 'component1',
    component: Component1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
