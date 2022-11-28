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
      name: 'Baba mom',
      type: 'Babero',
      price: 200,
      stock: 15,
      image: 'assets/img/Baberos.png',
    },
    {
      name: 'Recibiendo',
      type: 'Ajuar',
      price: 790,
      stock: 10,
      image: 'assets/img/Ajuar.png',
    },
    {
      name: 'Glamm',
      type: 'Body',
      price: 630,
      stock: 14,
      image: 'assets/img/Body.png',
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
