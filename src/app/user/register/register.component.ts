import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

import { UserService } from '../../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  form = this.formBuilder.group({ name: null, emoji: null, email: null, password: null })
  error: string | null = null

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.register(this.form.value.name, this.form.value.emoji, this.form.value.email, this.form.value.password)
      .subscribe(() => {
        this.router.navigate(['/profile'])
      }, (error: any) => {
        this.error = error
      })
  }
}
