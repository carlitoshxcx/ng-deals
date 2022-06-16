import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsRoutingModule } from './deals-routing.module';
import { ComponentsModule } from 'src/shared/components/components.module';
import { DealItemComponent } from './components/deal-item/deal-item.component';
import { DealListComponent } from './components/deal-list/deal-list.component';
import { DealDashboardComponent } from './components/dashboard/dashboard.component';
import { DealPendingComponent } from './components/pending/pending.component';
import { DealSuccessComponent } from './components/success/success.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DealsRoutingModule,
  ],
  declarations: [
    DealItemComponent,
    DealListComponent,
    DealDashboardComponent,
    DealPendingComponent,
    DealSuccessComponent,
  ],
  exports: [
    DealDashboardComponent,
    DealPendingComponent,
    DealSuccessComponent,
  ],
})
export class DealsModule {}
