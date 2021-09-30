import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  
{

  RegisterForm=new FormGroup
  ({
      Flight_id:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      from:new FormControl('',[Validators.required]),
      to:new FormControl('',[Validators.required]),
      departure:new FormControl('',[Validators.required]),
      //return:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      class1:new FormControl('',[Validators.required])
  })
  public registerObj={Flight_id:'',name:'',starting:'',ending:'',departure:'',total:'',type1:''}

  constructor(public api:ApiService) { }

  ngOnInit(): void 
  {
  }
  sendData()
  {  
    //console.log(this.registerObj);
    
    this.api.registerUser(this.registerObj);
    alert("SignUp Successful");
    location.assign('/admin');
  }  

  submitData()
  {

  }
}
