import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { MatDividerModule } from '@angular/material/divider';
import { DetailsComponent } from './details/details.component';
import { OrdersComponent } from './orders/orders.component';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { EditEmailPwDialogComponent } from './edit-email-pw-dialog/edit-email-pw-dialog.component';
import { Router } from '@angular/router';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-profile',
  imports: [
    MatTabsModule,
    MatDividerModule,
    DetailsComponent,
    OrdersComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  user!: User | undefined;
  orders!: Order[];

  constructor(private userService: UserService, private dialog: MatDialog, private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.user = this.userService.getCurrentUser();
      this.orders = this.orderService.getOrdersForUser(this.user?.email);
    }
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: { ...this.user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result;
        this.userService.updateUser(result);
      }
    });
  }

  editEmailPw() {
    const oldEmail = this.user!.email;

    const dialogRef = this.dialog.open(EditEmailPwDialogComponent, {
      width: '400px',
      data: { email: oldEmail }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedUser: User = {
          ...this.user!,
          email: result.email,
          password: result.password?.trim() ? result.password : this.user!.password
        }

        this.user = updatedUser;
        this.userService.updateUserEmailPw(oldEmail, updatedUser);
      }
    })
  }

  deleteProfile() {
    const confirmed = confirm('Biztosan törölni szeretné a profilját? Ez a művelet nem visszafordítható.');
    if (confirmed && this.user?.email) {
      this.userService.deleteUser(this.user.email);
      this.orderService.setUserToDeleted(this.user.email);
      this.user = undefined;
      this.router.navigateByUrl('/login');
    }
  }
}
