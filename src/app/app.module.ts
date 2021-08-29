import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './user/login/login.component'
import { TopBarComponent } from './nav/nav.component'
import { CartComponent } from './cart/cart.component'
import { ListComponent } from './product/list/list.component'
import { DetailComponent } from './product/detail/detail.component'
import { RegisterComponent } from './user/register/register.component'

import { ProductService } from './product.service'
import { CartService } from './cart.service'
import { UserService } from './user.service'
import { ProfileComponent } from './user/profile/profile.component'
import { OrdersComponent } from './user/orders/orders.component';
import { SearchComponent } from './my-compos/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    CartComponent,
    ListComponent,
    DetailComponent,
    ProfileComponent,
    RegisterComponent,
    OrdersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    CartService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
