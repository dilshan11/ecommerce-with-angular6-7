import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   userid;
   isadmin=true;
  constructor(private afauth:AngularFireAuth,public authser:AuthService,private userser:UserService,private router:Router) {
    
   }
  ngOnInit() {
    this.authser.users$.subscribe(data=>{
     if(data!=null){
       this.userid=data.uid;
     }
    });
  }
  logout(){
    this.authser.logout();
    this.router.navigate(['/login'])

  }
  logasadmin(){
    this.authser.getadmin(this.userid).subscribe(result=>{
        if(result==null){
          this.isadmin=true;
        }else{
          this.isadmin=false;
        }
    });
    
    console.log(this.isadmin);
 
  }
  logasuser(){
    this.isadmin=true;
  }
  
}
