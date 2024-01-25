import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentText: string = 'this is from the parent component'
  i: number = 0;
  buttonClickedInChild(event: string) {
    console.log(event)
    this.i++;
  }
}
