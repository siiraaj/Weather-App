import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({name: 'keys'})
export class DataService{

  constructor(private http: HttpClient) { }

  getCitys() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getCity(cityId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+cityId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
