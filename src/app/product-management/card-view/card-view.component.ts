import { Component } from '@angular/core';
import { products } from '../../data/products';
import { ProductsServiceService } from '../../services/products-service.service';
import { CartServiceService,CartItem } from '../../services/cart-service.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent {

  constructor(private serv : ProductsServiceService,private cartServ : CartServiceService){}

  productsData: any = this.serv.products;
  modify:boolean = false;
  Mname:string = "";
  Mprice:number = 0;
  Mquantity:number = 0;
  Mid:number = 0;

  onDeleteClicked(id:number)
  {
    this.serv.removeProduct(id);
  }

  onModifyClicked(id:number)
  {
    this.modify = !this.modify;
    const getproduct : CartItem = this.serv.getDataById(id);
    this.Mid = getproduct.productId;
    this.Mname = getproduct.productName;
    this.Mprice = getproduct.price;
    this.Mquantity = getproduct.quantity;
  }

  modifyProduct(id:number,name:string,price:number,quantity:number)
  {
    this.modify = !this.modify;
    this.serv.modifyProduct(id,name,price,quantity);
  }

  onAddToCartClicked(id:number): void {
    const getproduct : CartItem = this.serv.getDataById(id);
    const cartItem: CartItem = {
      productId: getproduct.productId,
      productName: getproduct.productName,
      quantity: getproduct.quantity,
      price: getproduct.price
    };
    this.cartServ.addToCart(cartItem);
    alert(`${getproduct.productName} added to cart!`);
  }

}

