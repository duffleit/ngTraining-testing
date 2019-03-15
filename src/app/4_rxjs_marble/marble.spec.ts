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

    it('preforms map on the stream', () => {
        getTestScheduler().run(({ cold, expectObservable }) => {
            const source = cold(' --a--b--c-|', { a: 1, b: 2, c: 3 });
            const expected = '    --a--b--c-|';
            const expectedValue = { a: 2, b: 4, c: 6 };

            const result = source.pipe(map(v => v * 2));

            expectObservable(result).toBe(expected, expectedValue);
        });
    });

    it('performs filter on the stream', () => {
        getTestScheduler().run(({ cold, expectObservable }) => {
            const source = cold(' --a--b--a-|', { a: 1, b: 2 });
            const expected = '    --a-----a-|';
            const expectedValue = { a: 1 };

            const result = source.pipe(filter(v => v === 1));

            expectObservable(result).toBe(expected, expectedValue);
        });
    });
});
