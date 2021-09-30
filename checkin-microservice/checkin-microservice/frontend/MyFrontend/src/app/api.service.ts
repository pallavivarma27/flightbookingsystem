import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  check1(registerObj:any)
  {
    console.log(registerObj);
    this.http.post('http://localhost:4000/user',registerObj).subscribe(res =>
    {
      
      console.log(res); 
      if(res)
      {
        alert("checkIn Success");
      }
      else
      {
        alert("checkIn Failed");
      }
    })
  }
}
