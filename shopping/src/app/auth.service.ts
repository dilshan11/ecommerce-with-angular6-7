import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users;
  a;
    public isuser;
    public users$:Observable<firebase.User>;
    private subject = new Subject<any>();

  constructor(private afauth:AngularFireAuth,private db:AngularFirestore) { 
    this.users$=afauth.authState;

  //   this.users$.subscribe(data=>{
  //     this.a=data.uid;
       
  //  });
  }

  login(){
    this.subject.next({user:'users'});
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afauth.auth.signOut();
  }
 
  getMessage(){
   return this.subject.asObservable();
  }
   getadmin(a){
     console.log(a);
     return this.db.collection('admin').doc(a).valueChanges();
   }
}
