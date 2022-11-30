import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import {Product} from './Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


   products: Product [] = [
    { 
      image: 'assets/img/Baberos.png',
      name: 'Baba mom',
      type: 'Babero',
      price: 200,
      stock: 2,
      clearance: false,
      quantity: 0,
      
    },
    {
      image: 'assets/img/Ajuar.png',
      name: 'Recibiendo',
      type: 'Ajuar',
      price: 790,
      stock: 3,
      clearance: true, 
      quantity: 0,
      
    },
    {
      image: 'assets/img/Body.png',
      name: 'Glamm',
      type: 'Body',
      price: 630,
      stock: 1, 
      clearance: false,
      quantity: 0,
      
    }];
 

  constructor(private cart: ProductCartService) {
    
   }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.stock-= product.quantity;
    product.quantity=0;
  }

  maxReached(m: string) {
    alert(m);
  }


}
