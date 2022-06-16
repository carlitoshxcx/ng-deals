import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deal-success',
  template: `
    Success:<br>
    <app-deal-list
      type="success"
      [dealList]="dealList"
      ></app-deal-list>
  `
})
export class DealSuccessComponent {
  @Input() dealList: string[];
}
