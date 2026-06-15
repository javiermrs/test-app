function suma(a, b) {
  return a + b;
}

test('suma 2 + 3 es 5', () => {
  expect(suma(2, 3)).toBe(5);
});