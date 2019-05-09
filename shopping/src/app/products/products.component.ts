import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategeoryService } from '../categeory.service';
import { ShoppingCartService } from '../shopping-cart.service';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  amount=0;
  allpro=[];
  allcata;
  orignal;
  ss;
  isseparete=true;
  map;
   i;
  constructor(private proservice:ProductService,private categeser:CategeoryService,private cartser:ShoppingCartService ) { }

  ngOnInit() {
    this.map=this.cartser.map;
    this.proservice.getallproduct().subscribe(data=>{
      this.orignal=data;
      this.allpro=data;
    });
       this.categeser.getcategery().subscribe(data=>{
        this.allcata=data;
    });
  }
 
 
  dana(s){
    this.cartser.cartdana(s);
  }
 
rina(s){
  this.cartser.cartrina(s);
}
  separate(cata){
     
    if(this.isseparete==false){
      this.allpro=this.orignal;
    }
    this.isseparete=false;
    let b=this.allpro;
    this.allpro=[];
     
    for(let a of b){
        if(a.categeory===cata){
          this.allpro.push(a);
          console.log(a);
        }
    }
    
  }
  allcat(){
    this.allpro=this.orignal;
  }

}
