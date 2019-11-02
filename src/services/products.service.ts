import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/model/item';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService{
    constructor(private httpSvc: HttpClient){}
    getItems(): Observable<Item[]> {
        const url = 'https://localhost:44368/api/product/items';
        return this.httpSvc.get<Item[]>(url);
    }
}