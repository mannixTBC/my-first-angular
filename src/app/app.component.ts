import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {GetApiService} from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular';
  data:any=[]
  displayedColumns = ['id','name','status'];
  status = ['available','pending','sold'];
  selectVal = 'available';
  
  dataSource!:MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;

  
  constructor(private api:GetApiService){
  }
  ngOnInit(){
    this.api.apiCall(this.selectVal).subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data);
      setTimeout(() => this.dataSource.paginator = this.paginator)
      console.log(this.paginator)
      console.warn(data)
      this.data = data  
    })
  }
  public open(event:any) {
    this.ngOnInit()
  }
}

