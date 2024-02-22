import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { NewProductsType } from '../models/inventory-app/new-products-type';
import { ProductsType } from '../models/inventory-app/products-type';

@Injectable({
  providedIn: 'root'
})
export class InventoryAppService {
  constructor(
    private http: HttpClient
  ) { }

  private _products$!: BehaviorSubject<ProductsType[]>;

  public get products(): BehaviorSubject<ProductsType[]> {
    if (!this._products$) {
      this._products$ = new BehaviorSubject<ProductsType[]>([]);
      this.getProductsList().pipe(take(1)).subscribe(v => this._products$.next(v));
    }
    return this._products$;
  }

  public getNewProductsList(): Observable<NewProductsType[]> {
    return this.http.get<NewProductsType[]>("https://excel2json.io/api/share/4b54e7f8-927a-4a38-e690-08dab79fa5b4");
  }

  public getProductsList(): Observable<ProductsType[]> {
    return this.http.get<ProductsType[]>("https://excel2json.io/api/share/22b3aaa8-bba3-43cb-e68f-08dab79fa5b4");
  }
}
