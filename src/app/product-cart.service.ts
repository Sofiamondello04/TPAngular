import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  private _cartList: Product[] =[];
  cartList: BehaviorSubject<Product[]>= new BehaviorSubject(this._cartList);

  addToCart(product: Product) {
    let item = this._cartList.find((v1) =>v1.name==product.name);
    if (!item) {
      this._cartList.push({...product});
    }
    else {
      item.quantity+= product.quantity;
    }
   
    this.cartList.next(this._cartList);
  }

  delete(product: Product){

    let item = this._cartList.find((v1) =>v1.name==product.name);
    this._cartList= this._cartList.filter((v1)=>v1.name!=product.name);
    //this._cartList.pop();
    this.cartList.next(this._cartList);//aviso al suscriptor
  }


  constructor() { }
}


 

