import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { Product } from './product-list/Product';

const URL= 'https://6387cbe2d94a7e50408db836.mockapi.io/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }
    
    public getAll(): Observable<Product[]> {
      return this.http.get<Product[]>(URL)
      .pipe(
        //opcion de transformacion
        tap((products: Product[]) => products.forEach(product=> product.quantity=0))
      );
      //retorna un observable del arreglo JSON. Previamente transformo el retorno para que el quantity me devuelva 0, ya que no viene por la API. EL pipe me permite eso
    }


  
}
