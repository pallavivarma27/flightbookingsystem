import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
//import {Flight} from './flight';

interface Flight 
{
  value: string;
  viewValue: string;
}

interface Flight1
{
  value: string;
  viewValue: string;
}

interface Type1
{
  value: string;
  viewValue: string;
} 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  selectedvalue1:string='';
  selectedvalue:string='';
  selectedvalue2:string='';
  flights: Flight[] = 
  [
          {value:"Hyderabad",viewValue:"Hyderabad"},
          {value:"Mumbai",viewValue:"Mumbai"},
          {value:"Goa",viewValue:"Goa"},
          {value:"Kolkatta",viewValue:"Kolkatta"},
          {value:"Delhi",viewValue:"Delhi"},
          {value:"Banglore",viewValue:"Banglore"}
  ];

  flights1: Flight1[] = 
  [
          {value:"Hyderabad",viewValue:"Hyderabad"},
          {value:"Mumbai",viewValue:"Mumbai"},
          {value:"Goa",viewValue:"Goa"},
          {value:"Kolkatta",viewValue:"Kolkatta"},
          {value:"Delhi",viewValue:"Delhi"},
          {value:"Banglore",viewValue:"Banglore"}
  ];

  type11: Type1[] = 
  [
          {value:"Economic",viewValue:"Economic"},
          {value:"Business",viewValue:"Business"},
          {value:"Gold",viewValue:"Gold"}
  ];

  constructor(public api:ApiService) { }
  
  ngOnInit(): void 
  {
     
  }


  example='hello';
  _id:String='';
  starting:string='';
  ending:string='';
  departure!: Date;
  return1:string='';
  type1:string='';
  getData() 
  { 

    console.log(this.selectedvalue1);
    console.log(this.selectedvalue);
    console.log(this.departure);
    console.log(this.selectedvalue2);
    this.api.getUsers(this.selectedvalue1,this.selectedvalue,this.departure,this.selectedvalue2);
    
  }
  send() 
  {

    
    this.api.senddata(this.selectedvalue1,this.selectedvalue,this.departure,this.selectedvalue2);
    location.assign('http://localhost:54347'); 
    //location.assign('http://localhost:4300/example');
  }
  opennewtab()
  {
    window.open();
  }



} 
