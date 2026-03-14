import { divide } from "./divide";
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

// ここに例外のテストコードを追加
test("divide by zero", () => {
  expect(divide(3, 0)).toBe(Infinity);
});