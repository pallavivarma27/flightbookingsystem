import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 

  public registerObj={email:'',pwd:''} 
  constructor(public auth:AuthServiceService) { } 

  ngOnInit(): void { 
  }
  sendData() 
  {
    //console.log(this.registerObj);
    this.auth.registerUser(this.registerObj);
    //alert("Registration Success");
    //location.assign("http://localhost:4200/login");
  }

  RegisterForm=new FormGroup
  ({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required])
  })
  

  submitData()
  {

  }
}
