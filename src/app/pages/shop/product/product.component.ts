import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PricePipe } from '../../../pipes/price.pipe';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  imports: [
    MatCardModule,
    PricePipe,
    NgClass,
    MatButtonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: any;
  @Output() onAddToCart = new EventEmitter<any>();

  addToCart(product: any) {
    this.onAddToCart.emit(product);
  }
}
