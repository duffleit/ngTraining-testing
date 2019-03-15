import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SimpleComponent', () => {
  describe('Shalow testing', () => {
    let component: SimpleComponent;
    let fixture: ComponentFixture<SimpleComponent>;
    let htmlElement: HTMLElement;
    let debugElement: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [SimpleComponent],
        imports: [FormsModule]
      });
      fixture = TestBed.createComponent(SimpleComponent);
      component = fixture.componentInstance;
      htmlElement = fixture.nativeElement;
      debugElement = fixture.debugElement;
      fixture.detectChanges();
    });

    it('should create the correct greeting if a middle name is given', () => {
      component.firstName = 'Hans';
      component.middleName = 'Peter';
      component.lastName = 'Burger';

      fixture.detectChanges();

      expect(htmlElement.textContent).toContain('Hi, Hans Peter Burger');
    });

    it('should create the correct greeting if the middle name is not given', () => {
      component.firstName = 'Hans';
      component.lastName = 'Burger';

      fixture.detectChanges();

      expect(htmlElement.textContent).toContain('Hi, Hans Burger');
    });

    it('should reset the name if the reset-button was clicked', () => {
      component.firstName = 'Hans';
      component.lastName = 'Burger';
      fixture.detectChanges();

      debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();

      expect(htmlElement.textContent).toContain('Hi, Max Mustermann');
    });
  });
  describe('Isolated testing', () => {
    it('should create the correct greeting if a middle name is given', () => {
      const component = new SimpleComponent();

      component.firstName = 'Hans';
      component.middleName = 'Peter';
      component.lastName = 'Burger';

      expect(component.name).toBe('Hans Peter Burger');
    });

    it('should create the correct greeting if no middle name is given', () => {
      const component = new SimpleComponent();

      component.firstName = 'Hans';
      component.lastName = 'Burger';

      expect(component.name).toBe('Hans Burger');
    });

    it('should reset the name if reset was called', () => {
      const component = new SimpleComponent();
      component.firstName = 'Hans';
      component.lastName = 'Burger';

      component.reset();

      expect(component.name).toBe('Max Mustermann');
    });
  });
});
