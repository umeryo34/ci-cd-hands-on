export function divide(a, b) {
  if (b === 0) {
    throw new Error("分母が0だと割れません");
  }
  return a / b;
}
