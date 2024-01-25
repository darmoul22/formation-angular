import {Component, OnInit} from '@angular/core';
import {ExampleService} from "./example.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'formation-angular';
  data : {
    id: number,
    title: string
  }
  = {id: 0, title:'not loaded yet'}
  constructor(private exampleService: ExampleService) {
  }

  ngOnInit(): void {
    this.exampleService.getExampleData().subscribe(
      {
        next: (value: any) => {
          this.data = value[0]
          console.log(value)
        },
        error: error => console.log(error)
      }
    )
  }

}
