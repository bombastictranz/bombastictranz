import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NewProductsType } from '../models/inventory-app/new-products-type';
import { RevenueType } from '../models/e-commerce/revenue-type';
import { SalesType } from '../models/e-commerce/sales-type';
import { ECommerceService } from '../services/ecommerce.service';
import { InventoryAppService } from '../services/inventory-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public inventoryAppNewProducts: NewProductsType[] = [];
  public eCommerceSales: SalesType[] = [];
  public eCommerceRevenue: RevenueType[] = [];

  constructor(
    private inventoryAppService: InventoryAppService,
    private eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    this.inventoryAppService.getNewProductsList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.inventoryAppNewProducts = data,
      error: (_err: any) => this.inventoryAppNewProducts = []
    });
    this.eCommerceService.getSalesList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.eCommerceSales = data,
      error: (_err: any) => this.eCommerceSales = []
    });
    this.eCommerceService.getRevenueList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.eCommerceRevenue = data,
      error: (_err: any) => this.eCommerceRevenue = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
