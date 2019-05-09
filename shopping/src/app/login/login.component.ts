import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private subject = new Subject<any>();
  constructor(private authf:AngularFireAuth,private authser:AuthService,private userser:UserService,private routr:Router) { }

  ngOnInit() {
  }

  login(){
      
    this.authser.login();
    this.routr.navigate(['/'])
  }
   

}
