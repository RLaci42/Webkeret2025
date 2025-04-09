import { Component, Input } from '@angular/core';
import { Order } from '../../../models/order';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@Component({
  selector: 'app-orders',
  imports: [
    MatCardModule
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  @Input() orders?: Order[];

  constructor(private dialog: MatDialog) {}

  openOrderDetails(order: Order) {
    this.dialog.open(OrderDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '80vh',
      panelClass: 'custom-dialog',
      data: order
    });
  }
}
