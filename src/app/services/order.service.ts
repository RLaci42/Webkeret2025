import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  insertOrder(order: Order) {
    const orders = this.getOrders();
    orders.push(order);
    this.saveOrders(orders);
  }

  getOrders(): Order[] {
    const data = localStorage.getItem('orders');
    return data ? JSON.parse(data) : [];
  }

  getOrdersForUser(email: string | undefined): Order[] {
    if (email) {
      return this.getOrders().filter(o => o.placedByUser === email);
    }
    return [];
  }

  setUserToDeleted(email: string) {
    const data = this.getOrders();
    data.forEach((order) => {
      if (order.placedByUser === email) {
        order.placedByUser = 'deleted';
      }
    });
    this.saveOrders(data);
  }

  private saveOrders(orders: Order[]) {
    localStorage.setItem('orders', JSON.stringify(orders));
  }
}
