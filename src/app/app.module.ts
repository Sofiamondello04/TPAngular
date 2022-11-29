import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { PototitoAboutComponent } from './pototito-about/pototito-about.component';
import { PototitoProductsComponent } from './pototito-products/pototito-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    
    CartComponent,
          PototitoAboutComponent,
          PototitoProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
