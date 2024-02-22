import { Component, OnDestroy, OnInit } from '@angular/core';
import { IComboSelectionChangingEventArgs } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { SalesType } from '../models/e-commerce/sales-type';
import { ProductsType } from '../models/inventory-app/products-type';
import { ECommerceService } from '../services/ecommerce.service';
import { InventoryAppService } from '../services/inventory-app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public inventoryAppProducts: ProductsType[] = [];
  public products: ProductsType[] = [];
  public eCommerceSales: SalesType[] = [];
  public value: string = 'Basic Tee';
  public value1: string = '2';
  public value2: string = '15.99';
  public value3: string = '99';
  public value4: string = 'M050';

  constructor(
    protected inventoryAppService: InventoryAppService,
    private eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    this.inventoryAppService.getProductsList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.inventoryAppProducts = data,
      error: (_err: any) => this.inventoryAppProducts = []
    });
    this.inventoryAppService.products.pipe(takeUntil(this.destroy$)).subscribe(x => this.products = x);
    this.eCommerceService.getSalesList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.eCommerceSales = data,
      error: (_err: any) => this.eCommerceSales = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public comboSelectionChanging(event: IComboSelectionChangingEventArgs) {
    this.inventoryAppService.products.next(event.newValue as ProductsType[]);
  }
}
