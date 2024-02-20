import assert from 'node:assert';
import test from 'node:test';
import { foo, numbers } from '../src/lib.js';

test('1 + 2', () => {
    assert.strictEqual(1 + 2, 3);
});

test('foo()', () => {
    assert.strictEqual(foo(), 'Hello World!');
});

test('numbers', () => {
    assert(numbers.length > 2);
});

test('TypeScript works', () => {
    const fn = (text: string): string => text;
    assert.strictEqual(fn('Hello World!'), 'Hello World!');
});
