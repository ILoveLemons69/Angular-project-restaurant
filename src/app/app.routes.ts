import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Menu } from './menu/menu';
import { LogIn } from './log-in/log-in';
import { SignUp } from './sign-up/sign-up';
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
        component: LogIn
    },
    {
        path : 'sign-up',
        component: SignUp
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
