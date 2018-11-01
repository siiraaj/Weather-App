import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  citys$: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getCitys().subscribe(
      data => this.citys$ = data 
    );
  }

  

}
