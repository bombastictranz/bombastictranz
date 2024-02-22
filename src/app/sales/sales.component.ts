import { Component, OnDestroy, OnInit } from '@angular/core';
import { IComboSelectionChangingEventArgs } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { RevenueType } from '../models/e-commerce/revenue-type';
import { ECommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public eCommerceRevenue: RevenueType[] = [];
  public revenue: RevenueType[] = [];

  constructor(
    protected eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    this.eCommerceService.getRevenueList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.eCommerceRevenue = data,
      error: (_err: any) => this.eCommerceRevenue = []
    });
    this.eCommerceService.revenue.pipe(takeUntil(this.destroy$)).subscribe(x => this.revenue = x);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public comboSelectionChanging(event: IComboSelectionChangingEventArgs) {
    this.eCommerceService.revenue.next(event.newValue as RevenueType[]);
  }
}
