import healthIndicator from '../app';

test('returns healthy if the value > 50', () => {
  const input = {
    name: 'Маг',
    health: 90,
  };
  const expected = 'healthy';

  const received = healthIndicator(input);

  expect(received).toBe(expected);
});

test('returns wounded if the value > 15, but <= 50', () => {
  const input = {
    name: 'Маг',
    health: 50,
  };
  const expected = 'wounded';

  const received = healthIndicator(input);

  expect(received).toBe(expected);
});

test('returns critical if the value <= 15', () => {
  const input = {
    name: 'Маг',
    health: 15,
  };
  const expected = 'critical';

  const received = healthIndicator(input);

  expect(received).toBe(expected);
});
