import { Component } from '@angular/core';
import { CustomersServiceService } from '../../services/customers-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent {

  constructor(private serv : CustomersServiceService,private route:Router)
  {}

  onAddCustomerClicked(id:number,name:string,email:string,phone:number)
  {
    alert("Customer "+name+" is Added");
    this.serv.addCustomer(id,name,email,phone);
    this .route.navigate(['customer-management/card']);
  }

}
