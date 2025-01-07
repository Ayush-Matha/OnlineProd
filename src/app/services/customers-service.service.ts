import { Injectable } from '@angular/core';

export interface custData {
  customerId: number;
  customerName: string;
  customerEmail: string;
  customerPhone: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {

  constructor() { }

  customers = [
                {
                  cust_id : 1,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                },
                {
                  cust_id : 2,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                },
                {
                  cust_id : 3,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                },
                {
                  cust_id : 4,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                },
                {
                  cust_id : 5,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                },
                {
                  cust_id : 6,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                },
                {
                  cust_id : 7,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                },
                {
                  cust_id : 8,
                  cust_name :'Ayush Nilesh Matha',
                  cust_email : 'ayushmatha2001@gmail.com',
                  phone : 7447710296  
                }
              ];


   addCustomer(id:number,name:string,email:string,phone: number)
   {
      this.customers.push({cust_id : id,cust_name : name, cust_email : email,phone : phone});
   }
   
   removeCustomer(id:number)
  {
    const index = this.customers.findIndex(customer => customer.cust_id === id);

    if (index !== -1) {
      this.customers.splice(index, 1);
    }

  }

  modifyCustomer(id:number,name:string,email:string,phone:number)
  {
    const index = this.customers.findIndex(customer => customer.cust_id === id);

    if(name != null)
    {
      this.customers[index].cust_name = name;
    }

    if(email != null)
    {
      this.customers[index].cust_email = email;
    }

    if(phone != null)
    {
      this.customers[index].phone = phone;
    }    

  }

  getDataById(id:number):custData
  {
    const index = this.customers.findIndex(customer => customer.cust_id === id);
    return {
      customerId: this.customers[index].cust_id,
      customerName: this.customers[index].cust_name,
      customerEmail: this.customers[index].cust_email,
      customerPhone: this.customers[index].phone
    };

  }

}
