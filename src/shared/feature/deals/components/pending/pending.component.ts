import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deal-pending',
  template: `
    Pending:<br>
    <app-deal-list
      type="pending"
      [dealList]="dealList"
      (dealClick)="dealClick.emit($event)"
      ></app-deal-list>
  `
})
export class DealPendingComponent {
  @Input() dealList: string[];
  @Output() dealClick: EventEmitter<string> = new EventEmitter();
}