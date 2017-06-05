import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import {productGroup, condimentGroup} from './product.models';

@Injectable()
export class ProductService {
    constructor(
        private http: Http
        ) { }

    getProductGroups(): Observable<productGroup[]> {
        return this.http.get('/api/products', null)
            .map(response => response.json() )
            .map( data => <productGroup[]> data);
    }

    getCondimentGroups(productId: string): Observable<condimentGroup[]> {
        return this.http.get('/api/condiments/' + productId)
            .map(response => response.json() )
            .map( data => <condimentGroup[]> data);
    }

}
