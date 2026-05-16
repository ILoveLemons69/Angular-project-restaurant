import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Menu } from './menu/menu';
import { Login } from './log-in/log-in';
import { Register } from './sign-up/sign-up';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {
        path : 'home',
        component: Home
    },
    {
        path : 'cart',
        component: Cart
    },
    {
        path : 'menu',
        component: Menu
    },
    {
        path : 'log-in',
        component: Login
    },
    {
        path : 'sign-up',
        component: Register
    },
    {
        path : 'profile',
        component: Profile
    },
    {
        path : '**',
        redirectTo: 'home'
    }
];
