import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagementComponent } from './customer-management.component';
import { CardViewCustomerComponent } from './card-view-customer/card-view-customer.component';
import { ListViewCustomerComponent } from './list-view-customer/list-view-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const routes: Routes = [
  { 
    path: '', 
    component: CustomerManagementComponent,
    children:[
      {
        path:'',
        component:CardViewCustomerComponent
      },
      {
        path:'card',
        component:CardViewCustomerComponent
      },
      {
        path:'list',
        component:ListViewCustomerComponent
      },
      {
        path:'add',
        component:AddCustomerComponent
      },
      {
        path:'customerLogo',
        redirectTo:'card'
      }
    ]
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
