import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  myForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  onSubmit() {
    this.submitted = true;
  }
}
