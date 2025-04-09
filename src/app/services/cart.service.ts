import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  private itemCount = new BehaviorSubject<number>(0);

  itemCount$ = this.itemCount.asObservable();
  cartItem$ = this.cartItemsSubject.asObservable();

  constructor() {
    this.updateItemCount();
  }

  private getItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  private getCartKey(): string {
    const userEmail = localStorage.getItem('currentUserEmail');
    return userEmail ? `cart_${userEmail}` : 'cart_guest';
  }

  addToCart(product: any) {
    const items = this.getItems();
    const existingItem = items.find(i => i.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.push({product: product, quantity: 1});
    }

    this.cartItemsSubject.next(items);
    this.updateItemCount();
    this.saveCart();
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.saveCart();
    this.updateItemCount();
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.saveCart();
      this.updateItemCount();
    }
  }

  removeItem(item: CartItem) {
    const items = this.getItems().filter(i => i !== item);
    this.cartItemsSubject.next(items);
    this.updateItemCount();
    this.saveCart();
  }

  emptyCart(): void {
    this.cartItemsSubject.next([]);
    this.updateItemCount();
    this.saveCart();
  }

  switchCartOnLogin(email: string) {
    const data = sessionStorage.getItem(`cart_${email}`);
    const cartItems = data ? JSON.parse(data) : [];
    this.cartItemsSubject.next(cartItems);
    this.updateItemCount();
  }

  updateItemCount() {
    const total = this.getItems().reduce((sum, item) => sum + item.quantity, 0);
    this.itemCount.next(total);
  }

  getCurrentCart(): CartItem[] {
    return this.loadCart();
  }

  private loadCart(): CartItem[] {
    const data = sessionStorage.getItem(this.getCartKey());
    return data ? JSON.parse(data) : [];
  }

  saveCart() {
    sessionStorage.setItem(this.getCartKey(), JSON.stringify(this.getItems()));
  }
}
