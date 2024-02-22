import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { RevenueType } from '../models/e-commerce/revenue-type';
import { SalesType } from '../models/e-commerce/sales-type';

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {
  constructor(
    private http: HttpClient
  ) { }

  private _revenue$!: BehaviorSubject<RevenueType[]>;

  public get revenue(): BehaviorSubject<RevenueType[]> {
    if (!this._revenue$) {
      this._revenue$ = new BehaviorSubject<RevenueType[]>([]);
      this.getRevenueList().pipe(take(1)).subscribe(v => this._revenue$.next(v));
    }
    return this._revenue$;
  }

  public getSalesList(): Observable<SalesType[]> {
    return this.http.get<SalesType[]>("https://excel2json.io/api/share/f9942c71-b172-4060-4381-08da496bf5f2");
  }

  public getRevenueList(): Observable<RevenueType[]> {
    return this.http.get<RevenueType[]>("https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2");
  }
}
