import { foo, numbers } from '../src/lib.js';

test('1 + 2', () => {
    expect(1 + 2).toBe(3);
});

test('foo()', () => {
   expect(foo()).toBe('Hello World!');
});

test('numbers', () => {
    expect(numbers.length).toBeGreaterThan(2);
});

test('TypeScript works', () => {
    const fn = (text: string): string => text;
    expect(fn('Hello World!')).toBe('Hello World!');
});
