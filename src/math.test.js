import { sqrt } from "./math.js";

test("sqrt", () => {
  expect(sqrt(9)).toBe(3);
});

test("negative number", () => {
  expect(() => sqrt(-1)).toThrow();
});
// ここに例外のテストコードを追加
