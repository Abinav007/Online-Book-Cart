import { Injectable , Output,EventEmitter} from '@angular/core';
import {product} from './product';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  @Output() searchEvent = new EventEmitter();
  public cart = [];public total:number=0; public searchedValue="";
  constructor() { 
    console.log(product);
  }
  searchCall(){
    let searchProd =  product.filter(s => s.name.toLocaleLowerCase().includes(this.searchedValue.toLocaleLowerCase()));
    this.searchEvent.emit(searchProd);
  }
  }  
