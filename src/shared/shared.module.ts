import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DealsModule } from './feature/deals/deals.module';

@NgModule({
  imports: [
    ComponentsModule,
    DealsModule
  ],
  declarations: [],
  exports: []
})
export class SharedModule {}
