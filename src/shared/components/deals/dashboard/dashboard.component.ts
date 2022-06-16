import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deal-dashboard',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class DealDashboardComponent {
  @Input() name: string;
}
