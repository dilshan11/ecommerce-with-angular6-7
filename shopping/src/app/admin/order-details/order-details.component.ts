import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
produstlist;
a;
  constructor(private orderser:OrderService,private activaterout:ActivatedRoute) { }

  ngOnInit() {
    this.a =this.activaterout.snapshot.params['id'];
   this.orderser.fetchrealorder(this.a).subscribe(data=>{
    this.produstlist=data;
    console.log(this.produstlist);
    });
  
  }
  confirm(){
   // this.produstlist=[];
   this.orderser.removeorder(this.a);
  }

}
