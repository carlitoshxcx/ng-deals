import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deal-list',
  template: `
    <ng-container *ngFor="let deal of dealList">
      <app-deal-item
        [label]="deal"
        [type]="type"
        (itemClick)="dealClick.emit($event)"
        ></app-deal-item>
    </ng-container>
  `
})
export class DealListComponent {
  @Input() dealList: string[];
  @Input() type: 'pending' | 'success' | null = null;
  @Output() dealClick: EventEmitter<string> = new EventEmitter();
}
