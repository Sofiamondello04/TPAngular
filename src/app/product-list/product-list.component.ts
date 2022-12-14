import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import {Product} from './Product-interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


   products: Product [] = [];
   carts : Product [] = [];
 

  constructor(
    private cart: ProductCartService,
    private productDataService: ProductDataService) {
    
   }

  ngOnInit(): void {
    //ciclo de vida en el cual ANgular levanta el componente y lo muestra en el browser
    this.productDataService.getAll()
    .subscribe(products=>this.products=products);
    this.cart.cartList.subscribe((c)=>this.carts=c);
    
  }

  addToCart(product: Product): void {
    if (product.quantity> product.stock) {
      product.quantity=0;
      return alert("La cantidad ingresada supera el stock disponible");
      
    }
    else if (product.quantity<=0){
      product.quantity=0;
      return alert("La cantidad ingresada debe ser mayor a cero");

    }
    else {
       if (product.quantity==null)
       {
        product.quantity=0;
        return
       }
        this.cart.addToCart(product);
        product.quantity=0;
      
    }
    
    
   
  }

  saldoStock(product: Product) {
    let item= this.carts.find((c)=>c.name===product.name);
    if(!item) {
     
      return product.stock;
    }
    else {
      
      return product.stock-item.quantity;
    }
  }

  maxReached(m: string) {
    alert(m);
  }


}
