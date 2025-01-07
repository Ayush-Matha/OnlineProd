import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductManagementComponent,
    children:[
      {
        path:'',
        component:CardViewComponent
      },
      {
        path:'card',
        component:CardViewComponent
      },
      {
        path:'list',
        component:ListViewComponent
      },
      {
        path:'add',
        component:AddProductComponent,
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'productLogo',
        redirectTo:'card'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }

