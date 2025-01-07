import { Injectable } from '@angular/core';
import path from 'path';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  products =[
                    {
                        prod_id : 1,
                        prod_name : 'Nike leather Bag',
                        prod_price : 1400,
                        prod_quantity :1
                    },
                    {
                        prod_id : 2,
                        prod_name : 'leather Bag red',
                        prod_price : 1200,
                        prod_quantity :1
                    },
                    {
                        prod_id : 3,
                        prod_name : 'Nike Loafers black',
                        prod_price : 1800,
                        prod_quantity :1
                    },
                    {
                        prod_id : 4,
                        prod_name : 'Adidas black leather',
                        prod_price : 1900,
                        prod_quantity :1
                    },
                    {
                        prod_id : 5,
                        prod_name : 'Wooden Chair',
                        prod_price : 2100,
                        prod_quantity :1
                    },
                    {
                        prod_id : 6,
                        prod_name : 'Apple airpods',
                        prod_price : 2800,
                        prod_quantity :1
                    },
                    {
                        prod_id : 7,
                        prod_name : 'Crocks',
                        prod_price : 1600,
                        prod_quantity :1
                    },
                    {
                        prod_id : 8,
                        prod_name : 'Nike leather Bag gold',
                        prod_price : 1400,
                        prod_quantity :1
                    },
                    {
                        prod_id : 9,
                        prod_name : 'Leather Bag gold',
                        prod_price : 1900,
                        prod_quantity :1
                    }
                  ];               

  addProduct(id:number,name:string,price:number,quantity:number)
  {
    this.products.push({prod_id : id,prod_name : name,prod_price:price,prod_quantity:quantity});
  }

  removeProduct(id:number)
  {
    const index = this.products.findIndex(product => product.prod_id === id);

    if (index !== -1) {
      this.products.splice(index, 1);
    }

  }

  modifyProduct(id:number,name:string,price:number,quantity:number)
  {
    const index = this.products.findIndex(product => product.prod_id === id);

    if(name != null)
    {
      this.products[index].prod_name = name;
    }

    if(price != null)
    {
      this.products[index].prod_price = price;
    }   

    if(quantity != null)
    {
      this.products[index].prod_quantity = quantity;
    } 

  }

  getDataById(id:number)
  {
    const index = this.products.findIndex(product => product.prod_id === id);
    return {
      productId: this.products[index].prod_id,
      productName: this.products[index].prod_name,
      quantity: this.products[index].prod_quantity,
      price: this.products[index].prod_price
    };

  }
  
}

