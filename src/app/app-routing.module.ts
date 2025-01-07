import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { HomeComponent } from './home/home.component';
import { CardViewComponent } from './product-management/card-view/card-view.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
     path: 'product-management',
     loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule)
  },
  { 
    path: 'customer-management', 
    loadChildren: () => import('./customer-management/customer-management.module').then(m => m.CustomerManagementModule) 
  }, 
  { 
    path: 'sale-product', 
    loadChildren: () => import('./sale-product/sale-product.module').then(m => m.SaleProductModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
