import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // Declarations section: Declare components, directives, pipes... used in the module
  declarations: [
    AppComponent
  ],
  // Imports section: Import other Angular modules that this module depends on
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  // Providers section: Provide services that are used throughout the application
  providers: [],
  // Bootstrap section: Define the root component to be bootstrapped when the application starts
  bootstrap: [AppComponent]
})
export class AppModule { }
