import { FilesizePipe } from './filesize.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('FilesizePipe', () => {
  describe('Shallow Filesize Test', () => {
    @Component({
      template: `
        Size: {{ size | filesize: suffix }}
      `
    })
    class TestComponent {
      suffix: string;
      size: number;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [FilesizePipe, TestComponent]
      });

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('shoud convert bytes to megabytes', () => {
      component.size = 123123123;
      fixture.detectChanges();

      expect(el.textContent).toContain('117.42MB');
    });
    it('shoud convert bytes to megabytes and sould use the default extension', () => {
      component.size = 123123123;
      fixture.detectChanges();

      expect(el.textContent).toContain('117.42MB');
    });
    it('shoud convert bytes to megabytes and sould use a custom extension when given', () => {
      component.size = 123123123;
      fixture.detectChanges();

      expect(el.textContent).toContain('117.42MB');
    });
  }),
  describe('Isolated Filesize Test', () => {
    const pipe = new FilesizePipe();

    it('shoud convert bytes to megabytes', () => {
      expect(pipe.transform(123123123)).toBe('117.42MB');
    });

    it('shoud convert bytes to megabytes and sould use the default extension', () => {
      expect(pipe.transform(123123123)).toBe('117.42MB');
    });

    it('shoud convert bytes to megabytes and sould use a custom extension when given', () => {
      expect(pipe.transform(123123123, ' MYEXT')).toBe('117.42 MYEXT');
    });
  });
});
