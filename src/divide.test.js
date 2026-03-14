import { divide } from "./divide";
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

// ここに例外のテストコードを追加
import { divide } from "./devide";
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

test("divide by zero", () => {
  expect(divide(1, 0)).toThrow();
});