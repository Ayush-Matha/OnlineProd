import { Component } from '@angular/core';
import { CustomersServiceService,custData } from '../../services/customers-service.service';

@Component({
  selector: 'app-card-view-customer',
  templateUrl: './card-view-customer.component.html',
  styleUrl: './card-view-customer.component.scss'
})
export class CardViewCustomerComponent {

  constructor(private serv : CustomersServiceService)
  {}

  customerData = this.serv.customers;

  modify:boolean = false;
  Mname:string = "";
  Memail:string = "";
  Mphone:number = 0;
  Mid:number = 0;

  onDeleteClicked(id:number)
  {
    this.serv.removeCustomer(id);
  }

  onModifyClicked(id:number)
  {
    this.modify = !this.modify;
    const getproduct : custData = this.serv.getDataById(id);
    this.Mid = getproduct.customerId;
    this.Mname = getproduct.customerName;
    this.Memail = getproduct.customerEmail;
    this.Mphone = getproduct.customerPhone;
  }

  modifyCustomer(id:number,name:string,email:string,phone:number)
  {
    this.modify = !this.modify;
    this.serv.modifyCustomer(id,name,email,phone);
  }

}
