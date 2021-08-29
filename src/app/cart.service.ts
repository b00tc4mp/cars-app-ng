import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items: any

    constructor(
        private http: HttpClient
    ) {
        // this.items = []
        this.items = [
            { "id": "FYB61", "name": "MOD ROD", "image": "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FYB61_W_19_003.png", "year": 2019, "color": "blue", "maker": "hw-original", "collection": "factory-fresh", "style": "race", "description": "The MOD ROD (FYB61) belongs to the FACTORY FRESH collection of vehicles and it is cataloged in the RACE style. The color of this unit is BLUE and its brand (maker) is HW Original.", "price": 96, "url": "https://play.hotwheels.com/es-es/collection/detail?carId=FYB61" },
            { "id": "FYB61", "name": "MOD ROD", "image": "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FYB61_W_19_003.png", "year": 2019, "color": "blue", "maker": "hw-original", "collection": "factory-fresh", "style": "race", "description": "The MOD ROD (FYB61) belongs to the FACTORY FRESH collection of vehicles and it is cataloged in the RACE style. The color of this unit is BLUE and its brand (maker) is HW Original.", "price": 96, "url": "https://play.hotwheels.com/es-es/collection/detail?carId=FYB61" },
            { "id": "FYB61", "name": "MOD ROD", "image": "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FYB61_W_19_003.png", "year": 2019, "color": "blue", "maker": "hw-original", "collection": "factory-fresh", "style": "race", "description": "The MOD ROD (FYB61) belongs to the FACTORY FRESH collection of vehicles and it is cataloged in the RACE style. The color of this unit is BLUE and its brand (maker) is HW Original.", "price": 96, "url": "https://play.hotwheels.com/es-es/collection/detail?carId=FYB61" },
            { "id": "FYF94", "name": "'67 CAMARO", "image": "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FYF94_W_19_003.png", "year": 2019, "color": "blue", "maker": "gm", "collection": "hw-art-cars", "style": "vintage", "description": "The '67 CAMARO (FYF94) belongs to the HW ART CARS collection of vehicles and it is cataloged in the VINTAGE style. The color of this unit is BLUE and its brand (maker) is GM.", "price": 86, "url": "https://play.hotwheels.com/es-es/collection/detail?carId=FYF94" },
            { "id": "FYF94", "name": "'67 CAMARO", "image": "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FYF94_W_19_003.png", "year": 2019, "color": "blue", "maker": "gm", "collection": "hw-art-cars", "style": "vintage", "description": "The '67 CAMARO (FYF94) belongs to the HW ART CARS collection of vehicles and it is cataloged in the VINTAGE style. The color of this unit is BLUE and its brand (maker) is GM.", "price": 86, "url": "https://play.hotwheels.com/es-es/collection/detail?carId=FYF94" },
            { "id": "FYG51", "name": "ELECTRO SILHOUETTE", "image": "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FYG51_c_19_003.png", "year": 2019, "color": "blue", "maker": "hw-original", "collection": "hw-green-speed", "style": "alternative", "description": "The ELECTRO SILHOUETTE (FYG51) belongs to the HW GREEN SPEED collection of vehicles and it is cataloged in the ALTERNATIVE style. The color of this unit is BLUE and its brand (maker) is HW Original.", "price": 134, "url": "https://play.hotwheels.com/es-es/collection/detail?carId=FYG51" }
        ]
    }

    add(item: any): void {
        this.items.push({ ...item, image: item.thumbnail || item.image })
    }

    count(id: string): number {
        return this.items.reduce((accum: number, item: any) => item.id === id ? ++accum : accum, 0)
    }

    cart(): any {
        return this.items.reduce((accum: any, item: any) => {
            let elem: any = accum.items.find((elem: any) => elem.id === item.id)

            if (elem) {
                elem.count++
                elem.total = elem.count * elem.price
            } else {
                elem = { ...item, count: 1, total: item.price }

                accum.items.push(elem)
            }

            if (!accum.count) {
                accum.count = 1
                accum.total = item.price
            } else {
                accum.count++
                accum.total += item.price
            }

            return accum
        }, { items: [] })
    }

    increment(id: string) {
        const item = this.items.find((item: any) => item.id === id)

        this.items.push({ ...item })
    }

    decrement(id: string) {
        const index = this.items.findIndex((item: any) => item.id === id)

        this.items.splice(index, 1)
    }

    clear() {
        this.items.length = 0
    }
}