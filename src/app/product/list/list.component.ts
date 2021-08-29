import { Component, OnInit } from '@angular/core'

import { ProductService } from '../../product.service'
import { CartService } from '../../cart.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  list: any = null

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { 
    // this.onSubmit = this.onSubmit.bind(this) // [3]
  }

  ngOnInit(): void {
    if (this.productService.query === null) return

    this.productService.search(null)
      .subscribe(list => this.list = list)
  }

  onSubmit(query: string): void { // [1][2][3]
    this.productService.search(query)
      .subscribe(list => this.list = list)
  }

  // onSubmit = (query: string): void => { // [4]
  //   this.productService.search(query)
  //     .subscribe(list => this.list = list)
  // }

  addToCart(product: any) {
    this.cartService.add(product)
  }

  cartCount(id: string) {
    return this.cartService.count(id)
  }

  query() {
    return this.productService.query
  }
}
