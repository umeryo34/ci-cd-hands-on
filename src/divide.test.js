import { divide } from "./divide";
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

// 0 除算時の挙動を確認するテスト
test("divide by zero", () => {
  expect(divide(1, 0)).toBe(Infinity);
});