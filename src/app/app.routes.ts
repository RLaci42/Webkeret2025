import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';

export const routes: Routes = [
    {path: 'shop/:category', component: ShopComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'cart', component: CartComponent},
    {path: 'order', component: PlaceOrderComponent},
    {path: '**', redirectTo: 'shop/fishingRods'}
];