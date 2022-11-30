import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  cartList: Product[]= [];

  addToCart(product: Product) {
    let item = this.cartList.find((v1) =>v1.name==product.name);
    if (!item) {
      this.cartList.push({...product});
    }
    else {
      item.quantity+= product.quantity;
    }
    console.log(this.cartList);
  }


  constructor() { }
}


 

