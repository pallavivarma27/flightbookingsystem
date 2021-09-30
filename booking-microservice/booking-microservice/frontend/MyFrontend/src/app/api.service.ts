import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService 
{

 
  constructor(public http:HttpClient)
  {

  }
  sav(x:any)
  {
      this.http.post(`http://localhost:4000/user/${x}`,{}).subscribe(res=>{
        console.log(res);
      })
  }



}
