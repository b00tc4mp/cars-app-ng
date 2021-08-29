import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ProductService } from '../../product.service'
import { CartService } from '../../cart.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  item: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params =>
        this.productService.retrieve(params.get('id') || '')
          .subscribe(item =>
            this.item = item
          )
      )
  }

  addToCart(product: any) {
    this.cartService.add(product)
  }

  getCartCount(id: string) {
    return this.cartService.count(id)
  }

}