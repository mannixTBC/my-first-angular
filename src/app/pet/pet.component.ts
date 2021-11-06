import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  id:any;
  name:any;
  status:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
       this.id = params.get('id')
       setTimeout(() => this.id = params.get('id'));
       setTimeout(() => this.name = params.get('name'))
       setTimeout(() => this.status = params.get('status')) 
       console.log(this.id,this.name,this.status) 
      })
  }

}
