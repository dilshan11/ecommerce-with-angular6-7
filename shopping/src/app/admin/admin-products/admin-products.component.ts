import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  product;
  constructor(private proser:ProductService) { }

  ngOnInit() {
    this.proser.getallproduct().subscribe(data=>{
      this.product=data;
      console.log(data);
    })
  }

}
