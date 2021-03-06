import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall(value:any){
    return this.http.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${value}`)
  }
}
