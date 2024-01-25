import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Welcome';
  isDisabled: boolean = true;
  username: string = 'Yessine'

  onButtonClick() {
    console.log('Clicked')
  }
}
