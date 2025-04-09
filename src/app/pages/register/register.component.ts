import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { passwordMatchValidator } from '../../shared/validators/password-match-validator';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('', [Validators.required])
  }, {validators: passwordMatchValidator });

  registerError = '';

  constructor(private router: Router, private userService: UserService) {}

  register(): void {
    if (this.registerForm.hasError('passwordsNotMatch')) {
      this.registerError = 'A jelszó és megerősítése nem egyezik.';
      return;
    }

    if (this.registerForm.invalid) {
      this.registerError = 'Hiányzó vagy helytelen adat!';
      return;
    }

    const email = this.registerForm.value.email!;
    if (this.userService.getUserByEmail(email)) {
      this.registerError = 'Ez az email cím már foglalt!';
      return;
    }

    this.registerError = '';

    const newUser: User = {
      name: {
        lastName: null,
        firstName: null,
      },
      email: this.registerForm.value.email || '',
      password: this.registerForm.value.password || '',
      phone: null,
      address: {
        postalCode: null,
        city: null,
        street: null,
        number: null
      }
    };

    this.userService.addUser(newUser);
    this.userService.setCurrentUser(email);

    this.router.navigateByUrl('/shop/fishingRods');
  }

}
