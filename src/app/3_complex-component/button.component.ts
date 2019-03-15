import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="buttonClicked.emit()"><ng-content></ng-content></button>
  `
})
export class ButtonComponent {
    @Output()
    buttonClicked = new EventEmitter();
}
