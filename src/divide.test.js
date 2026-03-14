import { divide } from "./divide";
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

test("divide by zero", () => {
  expect(() => divide(1, 0)).toThrow();
});
// ここに例外のテストコードを追加
