import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { CartService } from '../cart.service'
import { UserService } from '../user.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit {
  cart: any

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    this.cart = this.cartService.cart()
  }

  incrementItem(id: string) {
    this.cartService.increment(id)

    this.refresh()
  }

  decrementItem(id: string) {
    this.cartService.decrement(id)

    this.refresh()
  }

  placeOrder() {
    if (!this.userService.loggedIn())
      this.router.navigate(['/profile'])
    else
      this.userService.order(this.cart)
        .subscribe(() => {
          this.cartService.clear()

          this.router.navigate(['/orders'])
        },
          (error: any) => alert('Oups, sorry, there was a problem while processing the order 🤷‍♂️')
        )

  }
}
