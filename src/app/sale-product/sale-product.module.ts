import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleProductRoutingModule } from './sale-product-routing.module';
import { SaleProductComponent } from './sale-product.component';


@NgModule({
  declarations: [
    SaleProductComponent
  ],
  imports: [
    CommonModule,
    SaleProductRoutingModule
  ]
})
export class SaleProductModule { }
