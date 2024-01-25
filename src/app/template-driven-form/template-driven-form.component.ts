import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  submitted: boolean = false;

  onSubmit(form: any) {
    // Display form data on submission
    this.submitted = true;
  }
}
