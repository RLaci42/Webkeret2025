import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HoverHighlightDirective } from '../../directives/hover-highlight.directive';
import { PricePipe } from '../../pipes/price.pipe';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-shop',
  imports: [HoverHighlightDirective, PricePipe, NgClass, ProductComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

  displayedProducts!: any[];
  category!: string;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || 'fishingRods';
      this.updateDisplayedProducts();
    })
  }

  updateDisplayedProducts(): void {
    switch(this.category) {
      case 'fishingRods': this.displayedProducts = this.productService.getFishingRods(); break;
      case 'reels': this.displayedProducts = this.productService.getReels(); break;
      case 'hooks': this.displayedProducts = this.productService.getHooks(); break;
      case 'bobbers': this.displayedProducts = this.productService.getBobbers(); break;
      case 'biteIndicators': this.displayedProducts = this.productService.getBiteIndicators(); break;
      default: this.displayedProducts = [];
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
