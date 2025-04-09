import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { UserService } from '../../services/user.service';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { PricePipe } from '../../pipes/price.pipe';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-place-order',
  imports: [
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    PricePipe,
  ],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent implements OnInit {
  step1Form!: FormGroup;
  step2Form!: FormGroup;
  cartItems!: CartItem[];
  orderPlaced: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private cartService: CartService, private orderService: OrderService) {

    this.step1Form = this.fb.group({
      name: this.fb.group({
        lastName: ['', Validators.required],
        firstName: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });

    this.step2Form = this.fb.group({
      address: this.fb.group({
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        city: ['', Validators.required],
        street: ['', Validators.required],
        number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      })
    });
  }

  ngOnInit(): void {
    const loggedInUser = this.userService.getCurrentUser();
    this.cartItems = this.cartService.getCurrentCart();

    if (loggedInUser) {
      this.step1Form.patchValue({
        name: {
          lastName: loggedInUser.name.lastName,
          firstName: loggedInUser.name.firstName
        },
        email: loggedInUser.email,
        phone: loggedInUser.phone
      });

      this.step2Form.patchValue({
        address: {
          postalCode: loggedInUser.address?.postalCode,
          city: loggedInUser.address?.city,
          street: loggedInUser.address?.street,
          number: loggedInUser.address?.number,
        }
      })
    }
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  placeOrder() {
    const order: Order = {
      orderNumber: 'HHO-' + Math.floor(1000000000 + Math.random() * 9000000000).toString(),
      placedByUser: this.userService.getCurrentUser()?.email ?? 'guest',
      cartItems: this.cartItems,
      shippingDetails: {
        name: {
          lastName: this.step1Form.value.name.lastName,
          firstName: this.step1Form.value.name.firstName,
        },
        email: this.step1Form.value.email,
        phone: this.step1Form.value.phone,
        address: {
          postalCode: this.step2Form.value.address.postalCode,
          city: this.step2Form.value.address.city,
          street: this.step2Form.value.address.street,
          number: this.step2Form.value.address.number,
        }
      }
    }

    this.orderService.insertOrder(order);
    this.cartService.emptyCart();
    this.orderPlaced = true;
  }
}
