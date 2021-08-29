import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

import { UserService } from '../../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  form = this.formBuilder.group({ email: null, password: null })
  error: string | null = null

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.login(this.form.value.email, this.form.value.password)
      .subscribe((res: any) => {
        this.router.navigate(['/profile'])
      }, (error: any) => {
        this.error = error
      })
  }
}
