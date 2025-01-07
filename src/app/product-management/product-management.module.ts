import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementComponent } from './product-management.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductManagementComponent,
    CardViewComponent,
    ListViewComponent,
    NavbarComponent,
    AddProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    FormsModule
  ]
})
export class ProductManagementModule { }
