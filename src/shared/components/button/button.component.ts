import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'pending' | 'success' | null = null;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
}
