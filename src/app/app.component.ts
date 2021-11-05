import { Component } from '@angular/core';
import {GetApiService} from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular';
  constructor(private api:GetApiService){

  }
  ngOnInit(){
    this.api.apiCall().subscribe((data) => {
      console.log('get the data' + data)
    })
  }
}
