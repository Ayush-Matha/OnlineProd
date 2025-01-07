import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementComponent } from './customer-management.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CardViewCustomerComponent } from './card-view-customer/card-view-customer.component';
import { ListViewCustomerComponent } from './list-view-customer/list-view-customer.component';
import { NavbarCustomerComponent } from './navbar-customer/navbar-customer.component';


@NgModule({
  declarations: [
    CustomerManagementComponent,
    AddCustomerComponent,
    CardViewCustomerComponent,
    ListViewCustomerComponent,
    NavbarCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule
  ]
})
export class CustomerManagementModule { }
