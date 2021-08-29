import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.userService.loggedIn()) {
      this.userService.retrieve()
        .subscribe(() => { },
        (error: any) => {
          this.userService.logout()
        })
    }
  }
}
