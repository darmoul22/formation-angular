import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
@Input() childText: string = '' ;
@Output() buttonClicked : EventEmitter<string> = new EventEmitter();
  buttonClick() {
    this.buttonClicked.emit('clicked')
  }
}
