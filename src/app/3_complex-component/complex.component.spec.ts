import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import { ComplexComponent } from './complex.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';
import { OrderService } from './order.service';
import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { cold, getTestScheduler } from 'jasmine-marbles';

const mockHttpClient = {
  post: () => cold('--x|', { x: {} })
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

  beforeEach(() => {});

  it('should increment with the configured stepping', () => {});

  it('should decrement with the configured stepping', () => {});

  it('should not decrement beyond the given limit', () => {});

  it('should not icrement above the given limit', () => {});

  it('should call the getHelp() method if the user clicks on help-button', () => {
    spyOn(component, 'getHelp').and.callThrough();

    const button = debugElement.query(By.css('#help-btn button'));
    button.nativeElement.click();

    expect(component.getHelp).toHaveBeenCalled();
  });

  it('should trigger needsHelp-EventEmitter if user clicks on help-button', () => {});

  it('should show success message if user ordered tickets successful', () => {});

  it('should not show success message if user ordered tickets successful', async(() => {
    fixture.detectChanges();

    const button = debugElement.query(By.css('#order-btn button'));
    button.nativeElement.click();

    getTestScheduler().flush();
    fixture.detectChanges();

    const successMessageElement = debugElement.query(By.css('#success-message'))
      .nativeElement;

    expect(successMessageElement).toBeDefined();
  }));
});
