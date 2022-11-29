import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  cartList: Product[]= [];

  addToCart(product: Product) {
    this.cartList.push(product);
    
  }


  constructor() { }
}


 

