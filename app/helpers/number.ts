/**
 * Function to fix the decimal to 2
 * @param value value to fix the decimal
 * @returns fixed decimal value
 */
export function decimalFixed(value: string, fixed: number = 2) {
  const result = Number(value).toFixed(fixed);
  return result === "NaN" ? "-" : result;
}
