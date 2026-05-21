import { describe, it, expect } from 'vitest';

describe('sample tests', () => {
  it('sum 1 + 2', () => {
    expect(1 + 2).toBe(3);
  });

  it('hello world', () => {
    const target = 'world';
    const message = `Hello ${target}`;

    expect(message).toBe('Hello world');
  });
});
