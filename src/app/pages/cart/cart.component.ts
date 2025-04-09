import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { PricePipe } from '../../pipes/price.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [
    PricePipe,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems!: CartItem[];
  cartItemCount!: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
      this.cartService.cartItem$.subscribe(items => {
        this.cartItems = items;
    });

    this.cartService.itemCount$.subscribe(itemCount => {
      this.cartItemCount = itemCount;
    })
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  emptyCart() {
    this.cartService.emptyCart();
  }

  placeOrder() {
    this.router.navigateByUrl('/order');
  }
}
