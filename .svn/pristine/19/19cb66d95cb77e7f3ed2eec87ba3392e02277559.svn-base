import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class suburb {
    postcode: number;
    label: string;
}


@Injectable()
export class SuburbService {

    private _suburbs: suburb[] = [];

    constructor(private http: Http ) {
        this.getSuburbs().subscribe(
            data => this._suburbs = data
        );
    }

    private getSuburbs(): Observable<suburb[]> {
        return this.http.get('/api/suburbs', null)
            .map(response => response.json() )
            .map( data => <suburb[]> data);
    }

    get suburbs() :suburb[] {
        return this._suburbs;
    }

}
