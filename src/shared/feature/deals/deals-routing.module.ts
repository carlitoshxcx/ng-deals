import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DealDashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: DealDashboardComponent}
    ]),
  ]
})
export class DealsRoutingModule {}