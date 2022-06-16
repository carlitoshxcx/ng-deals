import { NgModule } from '@angular/core';

import { DealDashboardComponent } from './deals/dashboard/dashboard.component';
import { DealPendingComponent } from './deals/pending/pending.component';
import { DealSuccessComponent } from './deals/success/success.component';

@NgModule({
  imports: [],
  declarations: [
    DealDashboardComponent,
    DealPendingComponent,
    DealSuccessComponent,
  ],
})
export class SharedModule {}
