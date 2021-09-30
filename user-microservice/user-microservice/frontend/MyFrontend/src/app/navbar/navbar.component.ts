import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthServiceService) { }

  ngOnInit(): void {
  }
  verify()
  {
    var x=prompt("Enter password to access");
    if(x=="avisflightadmin")
    {
      location.assign("http://localhost:4300/admin");
    }
    else
    {
      alert("please check the password ");
    }
  }
  send()
  {
    if(this.auth.loggedIn())
    {
      location.assign("http://localhost:4300/user");
    }
    else
    {
      location.assign("http://localhost:4300/user1");
    }
  }
  verify1()
  {
    location.assign("http://localhost:4200/") 
  }
  rem()
  {
    this.auth.logoutUser();
    alert("logout success")
  }
}
