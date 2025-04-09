import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USERS_KEY = 'registeredUsers';
  private readonly CURRENT_USER_KEY = 'currentUserEmail';

  constructor(private cartService: CartService) { }

  getUsers(): User[] {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  addUser(user: User) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  deleteUser(email: string) {
    const users = this.getUsers().filter(u => u.email !== email);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

    const currentEmail = localStorage.getItem(this.CURRENT_USER_KEY);
    if (currentEmail === email) {
      this.logout();
    }
  }

  updateUser(updatedUser: User) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.email === updatedUser.email);
    if (index > -1) {
      users[index] = updatedUser;
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }
  }

  updateUserEmailPw(oldEmail: string, updatedUser: User) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.email === oldEmail);
    if (index > -1) {
      users[index] = updatedUser;
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      localStorage.setItem(this.CURRENT_USER_KEY, updatedUser.email)
    }
  }

  getUserByEmail(email: string): User | undefined {
    return this.getUsers().find(u => u.email === email);
  }

  setCurrentUser(email: string) {
    localStorage.setItem(this.CURRENT_USER_KEY, email);
    localStorage.setItem('isLoggedIn', 'true');
  }

  getCurrentUser(): User | undefined {
    const email = localStorage.getItem(this.CURRENT_USER_KEY);
    if (!email) {
      return undefined;
    }
    return this.getUserByEmail(email);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    localStorage.setItem('isLoggedIn', 'false');
    this.cartService.emptyCart();
  }
}
