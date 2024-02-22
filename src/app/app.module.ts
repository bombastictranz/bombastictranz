import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxToggleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxComboModule, IgxDropDownModule, IgxDialogModule, IgxSimpleComboModule, IgxCheckboxModule, IgxGridModule } from 'igniteui-angular';
import { IgxPieChartModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    SalesComponent,
    CustomersComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxListModule,
    IgxAvatarModule,
    IgxPieChartModule,
    IgxCategoryChartModule,
    FormsModule,
    IgxToggleModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxComboModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxSimpleComboModule,
    IgxCheckboxModule,
    IgxGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
