import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orderlist;
  constructor(private order:OrderService,private router:Router) { }

  ngOnInit() {
    this.order.fetechorder().subscribe(data=>{
      this.orderlist=data;
    });
  }
  view(uid){
    this.router.navigate(['admin/orderdetails/',uid]);
  }

}
