import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service'
import { UserService } from '../user.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})

export class TopBarComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  getCartCount() {
    return this.cartService.items.length
  }

  data() {
    return this.userService.data
  }

}
