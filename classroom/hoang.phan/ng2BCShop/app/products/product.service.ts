import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {}

    public getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            //map convert Collection -> same Collection (element #)
            //Observable (Collection) contain Response
            //casting ->
            .map((response : Response ) => <IProduct[]> response.json())
            //data == response.json()
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}