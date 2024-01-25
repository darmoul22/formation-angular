import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  isActive: boolean = true;
  bgColor: string = 'blue';
  textColor: string = 'darkblue';
  colors: string[] = ['blue','red','green','yellow']
  toggle() {
    this.isActive = !this.isActive;
  }
}
