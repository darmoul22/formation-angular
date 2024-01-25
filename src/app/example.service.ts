import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
API_URL = environment.API_URL + 'example'
  constructor(private httpClient: HttpClient) { }

  getExampleData(){
    return this.httpClient
      .get<[{
      id: number,
      title: string
    }]>(this.API_URL)
  }
}
