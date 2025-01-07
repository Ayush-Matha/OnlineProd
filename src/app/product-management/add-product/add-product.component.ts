import { Component } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  constructor(private serv : ProductsServiceService,private route :Router )
  {}

  onAddProductClicked(id:number,name:string,price:number,quantity:number)
  {
    alert("Product "+name+" is added");
    this.serv.addProduct(id,name,price,quantity);
    this.route.navigate(['product-management/card']);
  }

}
