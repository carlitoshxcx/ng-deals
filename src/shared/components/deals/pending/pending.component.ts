import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deal-pending',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class DealPendingComponent {
  @Input() name: string;
}
