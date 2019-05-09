import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
 
 
 

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  pidarray=[];
  pobjectarray=[];
  map;
  promap;
  realmap;
  constructor(private bd:AngularFirestore) { 
    this.map=new Map();
    this.promap=new Map();
    this.realmap=new Map();
  }
  // makingsingle(s){
  //   this.pidarray.push(s);
  //   let dup =  new Set(this.pidarray);
  //   let ar=Array.from(dup);
  //   return ar;
  // }

  cartdana(s){
    if(this.map.has(s)){
      let value=this.map.get(s);
      value=value+1;
      this.map.set(s,value);
    }else{
      this.map.set(s,1);
      this.getcartproduct(s);
    }

    }
    cartrina(s){
      if(this.map.has(s)){
        let value=this.map.get(s);
        if(value>0){
        value=value-1;
        }
        this.map.set(s,value);
      }else{
        this.map.set(s,0);
        
        
      }
    }
    tempor;
    getcartproduct(mm){
      this.bd.collection('products').doc(mm).valueChanges().
      subscribe(result=>{
       this.tempor =result;
       this.tempor.pid=mm;
       this.promap.set(mm,this.tempor);
      }); 
    }
    a
    makerealcart(){
      this.promap.forEach((value: Object, key: string) => {
        this.a=value;
        this.a.amount=this.map.get(key);
        
         this.realmap.delete(key);
       
        this.realmap.set(key,this.a);
       
   });
        return this.realmap;
      
      // for(let[k,v] of this.promap){
      //   console.log('asasasasasas');
      //   let a=this.map.get(k);
         
      //   this.promap.v.amount=a;
      //   this.promap.set(k,this.promap);
      // }
      // return this.promap; 
    }

  } 


