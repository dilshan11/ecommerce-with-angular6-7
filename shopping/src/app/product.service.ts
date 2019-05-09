import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFirestore) { }

    saveproduct(prod){
      this.db.collection('products').add(prod)
    }
    getallproduct(){
      let a =this.db.collection('products').snapshotChanges().pipe(map(doarry=>{
        return doarry.map(doc=>{
          return{
            id:doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      }))
      return a;
    }
    geteditproduct(ab){
     return this.db.collection('products').doc(ab).valueChanges();
    }
    updateproduct(id,product){
      this.db.doc('products/'+id).update(product);
    }
    Deleteproducts(id){
      this.db.doc('products/'+id).delete();
    }
}
