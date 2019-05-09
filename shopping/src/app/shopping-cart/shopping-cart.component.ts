import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
 
 

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  mymap;
  myarray;
  sample;
  uid;
  name;
  isbutton=false;
  issuck=false;
  constructor(private cartser:ShoppingCartService,private authser:AuthService,private orderser:OrderService,private router:Router) {
    authser.users$.subscribe(data=>{
        this.uid=data.uid;
        this.name=data.displayName;
    });
   
  }

  ngOnInit() {
    this.nessary();
        
      }

      nessary(){
        this.myarray=new Array();
        this.mymap=this.cartser.makerealcart();
         
        this.mymap.forEach((value: Object, key: string) => {
           this.sample=value;
           let a=this.sample.amount*this.sample.price;
           this.sample.adding=a;
           if(this.sample.amount!=0){
         this.myarray.push(value);
           }
    });
          
          if(this.sample !=null){
           this.isbutton=true;
          }
         this.fulladding();
      }

      a;
      fulladding(){
        this.a=0;
        for(let b of this.myarray){
          this.a=this.a+ b.adding;
        }
      }
      saveorder(){
        this.isbutton=false;
        this.orderser.saveorder(this.uid,this.myarray,this.name);
        this.issuck=true;
      }
  }


