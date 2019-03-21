import { ComponentFixture } from '@angular/core/testing';
import { ComplexComponent } from './complex.component';
import { By } from '@angular/platform-browser';

export class ComplexComponentPageObject {
  constructor(private fixture: ComponentFixture<ComplexComponent>) {}

  public increment(): void {
    const incrementButton = this.fixture.debugElement
      .query(By.css('#increment-btn'))
      .query(By.css('button'));

    incrementButton.nativeElement.click();
  }

  public order(): void {
    const orderButton = this.fixture.debugElement
      .query(By.css('#order-btn'))
      .query(By.css('button'));

    orderButton.nativeElement.click();
  }
}
