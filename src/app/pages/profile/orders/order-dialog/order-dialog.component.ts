import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../../../../models/order';
import { PricePipe } from '../../../../pipes/price.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-dialog',
  imports: [
    PricePipe,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './order-dialog.component.html',
  styleUrl: './order-dialog.component.scss'
})
export class OrderDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public order: Order
  ) {}

  getTotalPrice() {
    return this.order.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
