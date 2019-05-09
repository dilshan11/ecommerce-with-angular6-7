import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFirestore) { 
   
  }

  saveorder(uid,product,name){
    var d = new Date();
    var date = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    for(let a of product){
      
    this.db.collection('order').doc(uid).collection('product').add(a);
    this.db.collection('order').doc(uid).set({name:name,date:date,uid:uid});
    }
  }
 
  fetechorder(){
    return this.db.collection('order').valueChanges();
  }
  fetchrealorder(uid){
    return this.db.collection('order').doc(uid).collection('product').valueChanges();
  }
  removeorder(uid){
    
    this.db.doc('order/'+uid).set({});
  }
}
