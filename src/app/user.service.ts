import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { /*Observable, of,*/ throwError } from 'rxjs'
import { tap, catchError, switchMap, map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})

export class UserService {

    token: string | null = sessionStorage.token
    data: any = null

    constructor(
        private http: HttpClient
    ) { }

    register(name: string, emoji: string, email: string, password: string) {
        return this.http.post(
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            { name, emoji, username: email, password },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .pipe(
                catchError(this.handleError)
            )
    }

    login(email: string, password: string) {
        return this.http.post(
            'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
            { username: email, password },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .pipe(
                tap(
                    (response: any) => {
                        this.token = response.token

                        sessionStorage.token = this.token
                    }
                ),
                catchError(this.handleError)
            )
    }

    loggedIn() {
        return !!this.token
    }

    retrieve() {
        return this.http.get(
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        )
            .pipe(
                tap(
                    (response: any) => {
                        this.data = {
                            name: response.name,
                            email: response.username,
                            emoji: response.emoji
                        }
                    }
                ),
                catchError(this.handleError)
            )
    }

    logout() {
        this.token = null
        delete sessionStorage.token

        this.data = null
    }

    order(cart: any) {
        return this.http.get(
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        )
            .pipe(
                switchMap(
                    (response: any) => {
                        cart.id = `${Date.now().toString(32)}-${Math.random().toString(36).slice(2)}`.toUpperCase()
                        cart.date = new Date().toISOString()

                        const orders = response.orders || []

                        orders.push(cart)

                        return this.http.patch(
                            'https://b00tc4mp.herokuapp.com/api/v2/users',
                            { orders },
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${this.token}`
                                }
                            }
                        )
                            .pipe(
                                catchError(this.handleError)
                            )
                    }
                ),
                catchError(this.handleError)
            )
    }

    orders() {
        return this.http.get(
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        )
            .pipe(
                map(
                    (response: any) => response.orders? response.orders.reverse() : []
                ),
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0)
            return throwError(`A client-side or network error occurred: ${error.error}`)
        else if (error.status >= 400 && error.status < 500)
            return throwError(error.error.error)
        else if (error.status >= 500)
            return throwError(`Backend returned code ${error.status}, body was: ${error.error}`)

        return throwError(error.message ? error.message :
            'Something bad happened; please try again later.');
    }
}