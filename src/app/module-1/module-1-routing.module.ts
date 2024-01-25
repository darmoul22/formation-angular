import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'parent'
  },
  {
    path: 'parent',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
