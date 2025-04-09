import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShopCategoryPipe } from '../../pipes/shop-category.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-menu',
  imports: [
    ShopCategoryPipe,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {

  @Input() shopCategories!: string[];
  @Input() sidenav!: MatSidenav;
  @Input() isLoggedIn: boolean = false;
  @Output() logoutEvent = new EventEmitter<void>();

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  logout() {
    this.logoutEvent.emit();
  }
}
