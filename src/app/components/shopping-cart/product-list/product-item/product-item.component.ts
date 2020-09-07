import { Component, OnInit ,Input} from '@angular/core';
import { CommonService } from '../../../../common.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product; 
  proddObject = {name};
  constructor(  public commonService:CommonService
    ) {}

  ngOnInit(): void {
    console.log(this.product);    
  }
  addToCart(prodObject){
    prodObject.count++;
    for(let i =0; i < this.commonService.cart.length; i++){
      if(this.commonService.cart[i].name == prodObject.name){
        this.commonService.total+=prodObject.rs;
        return;
      }
    }
    this.commonService.cart.push(prodObject);
    this.commonService.total+=prodObject.rs;
  }
  lessCartValue(prodObject){
    prodObject.count--;
    if(prodObject.count==0) this.commonService.cart.splice(this.commonService.cart.indexOf(prodObject),1);
    this.commonService.total-=prodObject.rs;
  }
}
