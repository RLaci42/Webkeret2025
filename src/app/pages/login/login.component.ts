import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loginError: string = '';

  constructor(private userService: UserService, private router: Router, private cartService: CartService) {}

  login() {
    this.loginError = '';

    if (this.email.invalid || this.password.invalid) {
      this.loginError = 'Kérjük adja meg az emailt és jelszót!';
      return;
    }

    const email = this.email.value!;
    const password = this.password.value!;

    const user = this.userService.getUserByEmail(email);

    if (!user || user.password !== password) {
      this.loginError = 'Hibás email vagy jelszó!';
      return;
    }

    this.userService.setCurrentUser(email);
    this.router.navigateByUrl('shop/fishingRods');
    this.cartService.switchCartOnLogin(email);
  }
}
