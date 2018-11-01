import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {

  city$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) 
  {
    this.route.params.subscribe( params => this.city$ = params.id );

  }

  ngOnInit() 
  {
    this.data.getCity(this.city$).subscribe(
      data => this.city$ = data 
    );
  }

}
