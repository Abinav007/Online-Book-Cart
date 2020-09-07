import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../common.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart;
  constructor(public commonService:CommonService) {}

  ngOnInit(): void {
    console.log(this.commonService.cart);
  }

}
