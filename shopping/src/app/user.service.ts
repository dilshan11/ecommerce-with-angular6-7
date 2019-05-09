import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { User } from './userformat';
import { Subject } from 'rxjs';
 
 
import * as Rx from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {
 loguser;
 a;
 isadmin;
 ass;
 public subject = new Subject<any>();
  constructor(private autch:AuthService,private bd:AngularFirestore) {
    
  }
    saveuser(user){
      this.loguser=user;
       this.a={name:user.name,email:user.email};
      this.bd.collection('users').doc(""+user.id).set(
         this.a
      )
  
    }
    saveadmin(){
      // this.isadmin=true;
      // this.subject.next(this.isadmin);
      // this.bd.collection('admin').doc(""+this.loguser.id).set(this.a);
    }
     
}
