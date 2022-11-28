import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


   products = [
    {
    "name" : "Baba's mom",
    "image": "assets/img/Baberos.png",
    "type" : "Babero",
    "price": "200",
    "stock": "15",
  },
  {
    "name" : "Recibiendo",
    "image": "assets/img/Ajuar.png",
    "type" : "Ajuar",
    "price": "790",
    "stock": "10",
    
  },
  {
    "name" : "Glamm",
    "image": "assets/img/Body.png",
    "type" : "Body",
    "price": "630",
    "stock": "14",
    
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
