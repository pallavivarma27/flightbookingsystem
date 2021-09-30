import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component'; 
import { UserComponent } from './user/user.component';
import {MatButtonModule} from '@angular/material/button' 
import {MatToolbarModule} from '@angular/material/toolbar'
import {ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';
import { User1Component } from './user1/user1.component';
 


const routes=[
  {path:'admin',component:AdminComponent},
  {path:'user' ,component:UserComponent},
  {path:'user1',component:User1Component}
]
 
@NgModule({
  declarations: [ 
    AppComponent,
    AdminComponent,
    UserComponent,
    NavbarComponent,
    User1Component
  ],
  imports: 
  [
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
