import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    query: string | null = null

    constructor(private http: HttpClient) {
    }

    search(query: string | null) {
        this.query = query || this.query

        return this.http.get(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${this.query}`)
    }

    retrieve(id: string) {
        return this.http.get(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
    }
}