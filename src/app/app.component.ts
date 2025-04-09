import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ShopCategoryPipe } from './pipes/shop-category.pipe';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    ShopCategoryPipe,
    MatButtonModule,
    MatBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  shopCategories: string[] = ['fishingRods', 'reels', 'hooks', 'bobbers', 'biteIndicators'];
  cartItemCount = 0;

  constructor(private cartService: CartService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser?.email) {
      this.cartService.switchCartOnLogin(currentUser.email);
    }

    this.cartService.itemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }
}
