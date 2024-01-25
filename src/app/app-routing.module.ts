import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define the routes for the application
const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => import('./module-1/module-1.module').then(m => m.Module1Module)
  }
];

@NgModule({
  // Configure the RouterModule with the defined routes and enable route initialization
  imports: [RouterModule.forRoot(routes)],
  // Export the configured RouterModule to make it available for use in other modules
  exports: [RouterModule]
})
export class AppRoutingModule { }
