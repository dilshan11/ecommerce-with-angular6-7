import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategeoryService {
   categeory;
  constructor(private bd:AngularFirestore) {
     
   }
  getcategery(){
   return this.bd.collection('cata').valueChanges();
       
  }
}
