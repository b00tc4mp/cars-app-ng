import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './product/list/list.component'
import { CartComponent } from './cart/cart.component'
import { DetailComponent } from './product/detail/detail.component'
import { ProfileComponent } from './user/profile/profile.component'
import { LoginComponent } from './user/login/login.component'
import { RegisterComponent } from './user/register/register.component'
import { OrdersComponent } from './user/orders/orders.component'

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: DetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
