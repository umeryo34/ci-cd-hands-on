import { sqrt } from "./math.js";

test("sqrt", () => {
  expect(sqrt(9)).toBe(3);
});

// ここに例外のテストコードを追加
test("negative number", () => {
  expect(() => sqrt(-1)).toThrow();
});
