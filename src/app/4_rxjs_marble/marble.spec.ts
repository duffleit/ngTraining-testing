import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs/internal/operators/throttleTime';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/operators';

const getTestScheduler = () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

describe('rxjs marble tests', () => {
  it('performs throttleTime on the stream', () => {
    const scheduler = getTestScheduler();
    scheduler.run(({ cold, expectObservable }) => {
      const valueMap = { a: 1, b: 1, c: 3 };
      const source = cold('-a--b--c---|', valueMap);
      const expected = '   -a-----c---|';

      const result = source.pipe(throttleTime(3, scheduler));

      expectObservable(result).toBe(expected, valueMap);
    });
  });

  it('preforms map on the stream', () => {});

  it('performs filter on the stream', () => {});
});
