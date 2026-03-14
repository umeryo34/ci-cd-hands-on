import { divide } from "./divide";
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

test("divide by zero", () => {
  expect(divide(1, 0)).toBe(Infinity);
});
// ここに例外のテストコードを追加
