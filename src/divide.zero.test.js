test("divide by zero", () => {
  expect(() => divide(1, 0)).toThrow();
});
