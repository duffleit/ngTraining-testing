import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/operators';
import { MaxLengthValidator } from '@angular/forms';
import { Observable } from 'rxjs';

const getTestScheduler = () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

describe('rxjs marble tests', () => {
  it('performs throttleTime on the stream', () => {
    const scheduler = getTestScheduler();
    scheduler.run(({ cold, expectObservable }) => {
      const source = cold('-a---b-c---|');
      const expected = '   -a---b-----|';

      const result = source.pipe(throttleTime(3, scheduler));

      expectObservable(result).toBe(expected);
    });
  });

  it('preforms map on the stream', () => {
    getTestScheduler().run(helper => {
      const valueMap = {
        a: { name: 'stefan' },
        b: { name: 'maxi' },
        c: { name: 'holger' }
      };
      const actual: Observable<Person> = helper.cold('--a--b--c---|', valueMap);
      const expected = '                              --a--b--c---|';

      const result = actual.pipe(map(p => p.name));

      helper
        .expectObservable(result)
        .toBe(expected, { a: 'stefan', b: 'maxi', c: 'holger' });
    });
  });

  it('performs filter on the stream', () => {});
});

class Person {
  name: string;
}
