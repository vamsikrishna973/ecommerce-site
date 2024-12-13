import { Injectable } from '@angular/core';
import { ProductService,Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'shoppingCart';
  private purchasedKey = 'purchasedProducts';

  constructor() {}

  // Get cart items
  getCartItems(): Product[] {
    const items = localStorage.getItem(this.cartKey);
    return items ? JSON.parse(items) : [];
  }

  // Add an item to the cart
  addToCart(item: Product): void {
    const items = this.getCartItems();
    items.push(item);
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }

  // Remove an item from the cart
  removeFromCart(index: number): void {
    const items = this.getCartItems();
    items.splice(index, 1);
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }

  // Buy items and save to purchased list
  buyItems(): void {
    const purchased = this.getPurchasedItems();
    const cartItems = this.getCartItems();
    localStorage.setItem(this.purchasedKey, JSON.stringify([...purchased, ...cartItems]));
    this.clearCart();
  }

  // Get purchased products
  getPurchasedItems(): Product[] {
    const items = localStorage.getItem(this.purchasedKey);
    return items ? JSON.parse(items) : [];
  }

  // Clear cart
  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }

 
}
