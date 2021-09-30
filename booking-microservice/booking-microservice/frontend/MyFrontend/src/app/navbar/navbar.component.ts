import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  verify() 
  {
      var x=prompt("Enter password to access");
      if(x=="123456789")
      {
        location.assign("http://localhost:4300/admin")
      }
  }
  verify1()
  {
      location.assign("http://localhost:4200/register");
  }
  verify2()
  {
      location.assign("http://localhost:4200/login")
  }
  verify3()
  {
      location.assign("http://localhost:4200/") 
  }

}
