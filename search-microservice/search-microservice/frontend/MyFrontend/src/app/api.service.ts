import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  message:any;
  users:any;
  constructor(private http:HttpClient) 
  { 

  }

  
  /*starting1:string='';
  ending1:string='';
  departure1:string='';
  type21:string='';*/
  getUsers(starting:any,ending:any,departure:any,type1:any)
  {
   
    this.http.get(`http://localhost:1330/user/${starting}/${ending}/${departure}/${type1}`).subscribe(res =>
    {
      //console.log(res);
      this.users=res;
      this.message=res;
      console.log(this.message);
      //this.show();
     //location.assign('http://localhost:4300/example')
    }) 
  } 
  
  

  registerUser(registerObj:any)
  {
    this.http.post('http://localhost:1330/register',registerObj).subscribe(res =>
    {
      
      console.log(res);  
      
    })
  }

  senddata(starting:any,ending:any,departure:any,type1:any)
  {
      this.http.post(`http://localhost:3000/user/${starting}/${ending}/${departure}/${type1}`,{}).subscribe(res=>
      {
            console.log(res);
      })
  }

}
