import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deal-item',
  template: `
    <app-button
      [label]="label"
      [type]="type"
      (buttonClick)="itemClick.emit($event)"
      ></app-button>
  `,
})
export class DealItemComponent {
  @Input() label: string;
  @Input() type: string;
  @Output() itemClick: EventEmitter<string> = new EventEmitter();
}
