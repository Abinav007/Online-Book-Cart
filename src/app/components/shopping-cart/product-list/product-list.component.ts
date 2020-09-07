import { Component, OnInit } from '@angular/core';
import { product } from '../../../product';
import { CommonService } from '../../../common.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  prod = [];
  constructor(public commonService:CommonService) { 
    this.commonService.searchEvent.subscribe((data)=>{
      this.prod=data    
    });
  }
  ngOnInit(): void {
    this.prod=product;
  }

}
