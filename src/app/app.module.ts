import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { NewOrderCountComponent } from './dashboard/dashboard-components/new-order-count/new-order-count.component';
import { InprogressOrderCountComponent } from './dashboard/dashboard-components/inprogress-order-count/inprogress-order-count.component';
import { OndeliveryOrderCountComponent } from './dashboard/dashboard-components/ondelivery-order-count/ondelivery-order-count.component';
import { TodayTotalSalesComponent } from './dashboard/dashboard-components/today-total-sales/today-total-sales.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    NewOrderCountComponent,
    InprogressOrderCountComponent,
    OndeliveryOrderCountComponent,
    TodayTotalSalesComponent,
    PendingOrdersComponent,
    OrderDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
