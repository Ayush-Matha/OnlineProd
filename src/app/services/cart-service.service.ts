import { Injectable } from '@angular/core';

export interface CartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private items: CartItem[] = [];

  constructor() { }

  addToCart(item: CartItem): void {
    const existingItem = this.items.find(cartItem => cartItem.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(item => item.productId !== productId);
  }

  getCartItems(): CartItem[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

  getTotalAmount(): number {
    return this.items.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  addQuantity(item:CartItem)
  {
    const existingItem = this.items.find(cartItem => cartItem.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    }
  }

  subQuantity(item:CartItem)
  {
    const existingItem = this.items.find(cartItem => cartItem.productId === item.productId);
    if (existingItem) {
      if(existingItem.quantity > 0)
        {
          existingItem.quantity -= item.quantity;
        }
    }
  }
}
