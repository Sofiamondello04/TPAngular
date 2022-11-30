import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';

import{ HttpClientModule } from '@angular/common/http';

import { CartComponent } from './cart/cart.component';
import { PototitoAboutComponent } from './pototito-about/pototito-about.component';
import { PototitoProductsComponent } from './pototito-products/pototito-products.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    
    CartComponent,
          PototitoAboutComponent,
          PototitoProductsComponent,
          InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
