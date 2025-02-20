import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Component2Component} from "./component2/component2.component";
import {Component3Component} from "./component3/component3.component";

const routes: Routes = [{
  path:'',
  redirectTo: 'component2',
  pathMatch: 'full'
},{
  path:'component2',
  component: Component2Component,
},
  {
  path:'component3',
  component: Component3Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
