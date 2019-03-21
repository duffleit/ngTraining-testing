import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
import { of, Observable } from 'rxjs';
import { ComplexComponent } from './complex.component';
import { ButtonComponent } from './button.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { isComponentInstance } from '@angular/core/src/render3/context_discovery';
import { By } from '@angular/platform-browser';
import { debug } from 'util';
import { ComplexComponentPageObject } from './complex.component.po';

describe('ComplexComponent', () => {
  it('should increment with the configured stepping', () => {});

  it('should decrement with the configured stepping', () => {});

  it('should not decrement beyond the given limit', () => {});

  it('should not icrement above the given limit', () => {});

  it('should increment once and should then order one ticket', () => {
    const orderService = new OrderService({ post: () => of({}) } as any);
    const callStack = [];
    orderService.placeOrder = (orderValue: number): Observable<any> => {
      callStack.push(orderValue);
      return of({});
    };

    TestBed.configureTestingModule({
      providers: [{ provide: OrderService, useValue: orderService }],
      imports: [FormsModule],
      declarations: [ComplexComponent, ButtonComponent]
    });

    const fixture = TestBed.createComponent(ComplexComponent);
    const { componentInstance: component, debugElement } = fixture;

    const complexComponent = new ComplexComponentPageObject(fixture);

    complexComponent.increment();
    complexComponent.order();
    complexComponent.increment();
    complexComponent.order();
    
    fixture.detectChanges();

    expect(callStack.length).toBe(2);
    expect(callStack).toEqual([1, 2]);
  });

  it('should call the getHelp() method if the user clicks on help-button', () => {});

  it('should trigger needsHelp-EventEmitter if user clicks on help-button', () => {});

  it('should show success message if user ordered tickets successful', () => {});

  it('should not show success message if user ordered tickets successful', () => {});
});
