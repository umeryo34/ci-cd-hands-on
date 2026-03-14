import { divide } from "./divide";
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

// ゼロ除算時の挙動を確認するテストコードを追加
test("divide by zero", () => {
  expect(divide(3, 0)).toBe(Infinity);
});