import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ComplexComponent } from './complex.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';
import { OrderService } from './order.service';
import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { cold, getTestScheduler } from 'jasmine-marbles';

const mockHttpClient = {
  post: () => cold('- 200ms -x|', { x: {} })
};

describe('ComplexComponent', () => {
  let component: ComplexComponent;
  let fixture: ComponentFixture<ComplexComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexComponent, ButtonComponent],
      imports: [FormsModule],
      providers: [
        OrderService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
    fixture = TestBed.createComponent(ComplexComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should not show success message if user ordered tickets successful', () => {
    fixture.detectChanges();

    const button = debugElement.query(By.css('#order-btn button'));
    button.nativeElement.click();

    cold('- 180ms -x|').subscribe(() => {
      fixture.detectChanges();

      const successMessageElement = debugElement.query(
        By.css('#success-message')
      ).nativeElement;

      expect(successMessageElement).toBeDefined();
    });
  });
});
