import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-complex',
  template: `
    <h1>Tickets</h1>
    <p><input id="order-value" [(ngModel)]="value" disabled /></p>
    <p>
      <app-button (buttonClicked)="increment()" id="#increment-btn">increment</app-button>
      <app-button (buttonClicked)="decrement()" id="#decrement-btn">decrement</app-button>
    </p>
    <p>
      <app-button (buttonClicked)="order()" id="order-btn">order</app-button>
    </p>
    <p *ngIf="showSuccessMessage" id="success-message">
      <b>Ordered successful!</b>
    </p>
    <p>
      <app-button (buttonClicked)="getHelp()" id="help-btn">Help</app-button>
    </p>
  `
})
export class ComplexComponent {
  @Input() step = 5;
  @Input() min = 0;
  @Input() max = 100;

  @Output() needsHelp = new EventEmitter();

  value = 0;
  focused: boolean;
  showSuccessMessage: boolean;

  constructor(private orderSerivce: OrderService) {}

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }

  getHelp(): void {
    this.needsHelp.emit();
  }

  order() {
    this.orderSerivce.placeOrder(this.value).subscribe(() => {
      this.showSuccessMessage = true;
    });
  }
}
