import { describe, it, expect } from 'vitest';

import cn from './cn';

describe('cn utils', () => {
  it('empty output', () => {
    expect(cn(undefined)).toBe('');

    expect(cn(undefined, undefined, undefined)).toBe('');
  });

  it('only the css border classname', () => {
    expect(cn('border', undefined)).toBe('border');
  });

  it('should avoid classname repetition', () => {
    expect(cn('border', 'border')).toBe('border');
  });

  it('should output only the truthy logic', () => {
    expect(
      cn('line', {
        border: true,
        bold: false,
      }),
    ).toBe('line border');
  });

  describe('tailwinc css', () => {
    it('should avoid duplication', () => {
      expect(
        cn(
          'items-center gap-x-4 mx-auto flex max-w-sm items-center gap-x-4 mx-auto flex',
        ),
      ).toBe('max-w-sm items-center gap-x-4 mx-auto flex');
    });
  });
});
