import { FilesizePipe } from './filesize.pipe';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { tick } from '@angular/core/src/render3';

describe('FilesizePipe', () => {
  describe('Shallow Filesize Test', () => {
    @Component({
      template: `
        Your size in MB is: {{ size | filesize: suffix }}
      `
    })
    class TestComponent {
      public size: number;
      public suffix: string;
    }

    let fixture: ComponentFixture<TestComponent>;
    let html: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, FilesizePipe],
        imports: [],
        providers: []
      });

      fixture = TestBed.createComponent(TestComponent);
      html = fixture.nativeElement;
      fixture.detectChanges();
    });

    it('shoud convert bytes to megabytes', () => {
      fixture.componentInstance.size = 123123123;
      fixture.componentInstance.suffix = ' MB';
      fixture.detectChanges();

      expect(html.textContent).toContain('117.42 MB');
    });

    it('shoud convert bytes to megabytes and sould use the default extension', () => {});
    it('shoud convert bytes to megabytes and sould use a custom extension when given', () => {});
  }),
    describe('Isolated Filesize Test', () => {
      let fileSizePipe;
      beforeEach(() => {
        fileSizePipe = new FilesizePipe();
      });

      it('shoud convert bytes to megabytes', () => {
        const sizeInMb = fileSizePipe.transform(123123123, '');
        expect(sizeInMb).toBe('117.42');
      });

      it('shoud convert bytes to megabytes and sould use the default extension', () => {
        const sizeInMb = fileSizePipe.transform(123123123);
        expect(sizeInMb).toBe('117.42MB');
      });
      it('shoud convert bytes to megabytes and sould use a custom extension when given', () => {
        const sizeInMb = fileSizePipe.transform(123123123, ' MEGAbyte');
        expect(sizeInMb).toBe('117.42 MEGAbyte');
      });
    });
});
