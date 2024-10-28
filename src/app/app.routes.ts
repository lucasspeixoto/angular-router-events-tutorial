import { Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { OrderComponent } from './features/order/order.component';

export const routes: Routes = [
  {
    path: 'carrinho',
    component: CartComponent,
  },
  {
    path: 'pedidos',
    component: OrderComponent,
  },
  { path: '', redirectTo: '/pedidos', pathMatch: 'full' },
  { path: '**', redirectTo: '/pedidos' },
];
