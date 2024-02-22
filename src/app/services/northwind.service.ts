import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getData(tableName: string): Observable<any> {
    return of(Northwind[tableName]);
  }
}
