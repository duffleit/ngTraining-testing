import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <p>Hi, {{ name }}</p>
    <p><button (click)="reset()"></button></p>
  `
})
export class SimpleComponent {
  @Input()
  firstName: string;
  @Input()
  middleName: string;
  @Input()
  lastName: string;

  get name(): string {
    let name = '';
    if (this.firstName) {
      name += this.firstName + ' ';
    }
    if (this.middleName) {
      name += this.middleName + ' ';
    }
    if (this.lastName) {
      name += this.lastName;
    }

    return name;
  }

  public reset() {
    this.firstName = 'Max';
    this.middleName = null;
    this.lastName = 'Mustermann';
  }
}
