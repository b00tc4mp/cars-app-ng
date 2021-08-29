import { Component, OnInit } from '@angular/core';

import { UserService } from '../../user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.loggedIn()) {
      this.userService.retrieve()
        .subscribe(() => { },
          (error: any) => {
            this.userService.logout()
          })
    }
  }

  data() {
    return this.userService.data
  }

  loggedIn() {
    return this.userService.loggedIn()
  }

  logout() {
    this.userService.logout()
  }

}
