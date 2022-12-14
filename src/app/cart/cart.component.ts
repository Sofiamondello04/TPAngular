import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartList$: Observable<Product[]> | undefined;

  constructor(
    private cart: ProductCartService) { 
    this.cartList$= cart.cartList.asObservable();
  
  }

  ngOnInit(): void {
  }

  delete(product: Product) : void{
    
    this.cart.delete(product);
        product.stock+= product.quantity;
      
  }
  

}
