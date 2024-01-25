import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss'
})
export class StructuralDirectivesComponent {
  title = 'formation-angular';
  disabled : boolean = false;
  productList = [
    {
      "id": 1,
      "name": "Product A",
      "description": "This is the description for Product A.",
      "price": 19.99,
      "category": "Electronics"
    },
    {
      "id": 2,
      "name": "Product B",
      "description": "This is the description for Product B.",
      "price": 29.99,
      "category": "Clothing"
    },
    {
      "id": 3,
      "name": "Product C",
      "description": "This is the description for Product C.",
      "price": 14.99,
      "category": "Home and Garden"
    },
    {
      "id": 4,
      "name": "Product D",
      "description": "This is the description for Product D.",
      "price": 39.99,
      "category": "Toys"
    },
    {
      "id": 5,
      "name": "Product E",
      "description": "This is the description for Product E.",
      "price": 49.99,
      "category": "Books"
    }
  ]
  status: string = 'active';

}
