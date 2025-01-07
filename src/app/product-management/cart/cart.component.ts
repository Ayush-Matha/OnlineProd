import { Component } from '@angular/core';
import { CartItem, CartServiceService } from '../../services/cart-service.service';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartServiceService,private serv:ProductsServiceService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalAmount = 0;
  }

  onQuantityAddClicked(id:number)
  {
    const getproduct : CartItem = this.serv.getDataById(id);
    const cartItem: CartItem = {
      productId: getproduct.productId,
      productName: getproduct.productName,
      quantity: getproduct.quantity,
      price: getproduct.price
    };
    this.cartService.addQuantity(cartItem);
  }

  onQuantitySubClicked(id:number)
  {
    const getproduct : CartItem = this.serv.getDataById(id);
    const cartItem: CartItem = {
      productId: getproduct.productId,
      productName: getproduct.productName,
      quantity: getproduct.quantity,
      price: getproduct.price
    };
    this.cartService.subQuantity(cartItem);
  }
}
