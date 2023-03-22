import { describe, test, expect } from 'vitest';

import { parseArgs } from '../parseArgs';

describe('parseArgs test group', () => {
  const expected = ['foo', 'bar', 'baz'];

  test('parseArgs returns correct array with default separator', () => {
    const args = parseArgs('foo;bar;baz');

    expect(args).toEqual(expected);
  });

  test('parseArgs returns correct array with custom separator', () => {
    const args = parseArgs('foo@bar@baz', '@');

    expect(args).toEqual(expected);
  });
});
