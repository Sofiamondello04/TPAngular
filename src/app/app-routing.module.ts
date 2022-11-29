import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PototitoAboutComponent } from './pototito-about/pototito-about.component';
import { PototitoProductsComponent } from './pototito-products/pototito-products.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch: 'full'
  },

  {
    path:'products', 
    component: PototitoProductsComponent
  },

  {
    path:'about', 
    component: PototitoAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
