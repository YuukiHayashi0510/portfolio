/**
 * 小数第N位で四捨五入
 * @param num 対象の数字
 * @param decimalPlace 小数点第N位, デフォルトは1
 * @returns 四捨五入済みの数字
 */
export const roundToNthDecimal = (num: number, decimalPlace = 1) => {
  const power = Math.pow(10, decimalPlace)
  return Math.round(num * power) / power
}
