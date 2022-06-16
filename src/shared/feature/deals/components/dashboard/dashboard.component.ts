import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deal-dashboard',
  template: `
    <app-deal-pending [dealList]="pending" (dealClick)="process($event)"></app-deal-pending>
    <hr>
    <app-deal-success [dealList]="success"></app-deal-success>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class DealDashboardComponent {
  public pending: string[] = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', ];
  public success: string[] = [];

  process(item: string) {
    this.pending.splice(this.pending.indexOf(item), 1);
    this.success.push(item);
  }
}
