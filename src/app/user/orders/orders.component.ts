import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'

import { UserService } from '../../user.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  orders: any
  orderId: any

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => this.orderId = params.get('id'))

    this.userService.orders()
      .subscribe(
        (orders: any) => {
          orders.forEach((order: any) => {
            order.formattedDate = formatDate(new Date(order.date))
          })
          this.orders = orders
        },
        (error: any) => alert('Ooups, sorry, there was a problem retrieving your orders 🤷‍♀️'))
  }

}


function formatDate(date: Date) {
  const parts = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
    .formatToParts(date).reduce((parts: any, part) => {
      parts[part.type] = part.value;

      return parts;
    }, {});

  return `${parts.day}/${parts.month}/${parts.year}, ${parts.hour}:${parts.minute}`;
}