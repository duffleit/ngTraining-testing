import { SimpleComponent } from './simple.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { isComponentInstance } from '@angular/core/src/render3/context_discovery';

describe('SimpleComponent', () => {
  describe('Shalow testing', () => {
    let fixture: ComponentFixture<SimpleComponent>;
    let component: SimpleComponent;
    let debugElement: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [SimpleComponent]
      });

      fixture = TestBed.createComponent(SimpleComponent);
      ({ componentInstance: component, debugElement } = fixture);
    });
    it('should create the correct greeting if a middle name is given', () => {
      component.firstName = 'Fritz';
      component.middleName = 'Peter';
      component.lastName = 'Fröhlich';

      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain(
        'Hi, Fritz Peter Fröhlich'
      );
    });
    it('should create the correct greeting if the middle name is not given', () => {});
    it('should reset the name if the reset-button was clicked', () => {
      component.firstName = 'Fritz';
      component.middleName = 'Peter';
      component.lastName = 'Fröhlich';
      fixture.detectChanges();

      debugElement.query(By.css('button')).nativeElement.click();
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent).toContain(
        'Hi, Max Mustermann'
      );
    });
  });
  describe('Isolated testing', () => {
    it('should create the correct greeting if a middle name is given', () => {
      const simpleComponent = new SimpleComponent();

      simpleComponent.firstName = 'Fritz';
      simpleComponent.middleName = 'Peter';
      simpleComponent.lastName = 'Fröhlich';

      expect(simpleComponent.name).toBe('Fritz Peter Fröhlich');
    });
    it('should create the correct greeting if no middle name is given', () => {
      const simpleComponent = new SimpleComponent();

      simpleComponent.firstName = 'Fritz';
      simpleComponent.lastName = 'Fröhlich';

      expect(simpleComponent.name).toBe('Fritz Fröhlich');
    });
    it('should reset the name if reset was called', () => {
      const simpleComponent = new SimpleComponent();

      simpleComponent.firstName = 'Fritz';
      simpleComponent.lastName = 'Fröhlich';
      simpleComponent.reset();

      expect(simpleComponent.name).toBe('Max Mustermann');
    });
  });
});
