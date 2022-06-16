import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deal-success',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class DealSuccessComponent {
  @Input() name: string;
}
