import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategeoryService } from 'src/app/categeory.service';
import { ProductService } from 'src/app/product.service';
import { NgModule }      from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import {ActivatedRoute} from '@angular/router';
import { asElementData } from '@angular/core/src/view';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  as;
  paraid;
  category;
  isupdate=false;
  goodsBank=new FormGroup({
    title:new FormControl(),
    price:new FormControl(),
    categeory:new FormControl(),
    image:new FormControl()
  })
  constructor(private proservise:CategeoryService, private productser:ProductService,private router:Router,
    private authser:AuthService,private actroute:ActivatedRoute,private pro:ProductService ) { }
  adminId;
  ngOnInit() {
    let a=this.actroute.snapshot.params['id'];
    this.paraid=a;
    if(a!=null){
      this.isupdate=true;
      this.pro.geteditproduct(a).subscribe(res=>{
         this.as=res;
       this.goodsBank.setValue({
         title:this.as.title,
         price:this.as.price,
         categeory:this.as.categeory,
         image:this.as.image
       })
      });
    }
      
      
    

    this.proservise.getcategery().subscribe(data=>{
     this.category=data;
    });
   
  }
  savegoods(){
    this.productser.saveproduct(this.goodsBank.value);
    this.router.navigate(["/admin/products"])
  }
  updategoods(){
    this.productser.updateproduct(this.paraid,this.goodsBank.value);
    this.router.navigate(["/admin/products"])
  }
  deletegoods(){
    this.productser.Deleteproducts(this.paraid);
    this.router.navigate(["/admin/products"])
  }
}
