import { Component, OnInit } from '@angular/core';
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
      stock: 10,
      clearance: false,
      quantity: 0,
      
    },
    {
      image: 'assets/img/Ajuar.png',
      name: 'Recibiendo',
      type: 'Ajuar',
      price: 790,
      stock: 0,
      clearance: true, 
      quantity: 0,
      
    },
    {
      image: 'assets/img/Body.png',
      name: 'Glamm',
      type: 'Body',
      price: 630,
      stock: 0, 
      clearance: true,
      quantity: 0,
      
    }];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product): void {
    if(product.quantity< product.stock) {
    product.quantity++;
    }
  }
  downQuantity(product: Product): void {
    if(product.quantity>0) {
    product.quantity--;
    }
  }
  changeQuantity(event: { key: any; }, product: Product): void {
    console.log(event.key);
  }


}
