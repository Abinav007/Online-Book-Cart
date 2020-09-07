import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../../common.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart;
  cartItems= {name:"" ,desc:"",rs: 0,count:0};
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    this.cartItems=this.cart;
  }

}
