import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OrdersType } from '../models/northwind/orders-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindOrders: OrdersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('OrdersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindOrders = data,
      error: (_err: any) => this.northwindOrders = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
