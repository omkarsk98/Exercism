export const convert = (arr = [], currBase, targetBase) => {
  if (currBase <= 1)
    throw new Error('Wrong input base');
  if (targetBase <= 1)
    throw new Error('Wrong output base');
  if (!arr.length || (arr.length > 1 && !arr[0]))
    throw new Error("Input has wrong format");
  if (targetBase == 10)
    return toDecimal(arr, currBase);
  const decimalValue = toDecimal(arr, currBase);
  return fromDecimal(+decimalValue.join(""), targetBase);
};

function toDecimal(number, currentBase) {
  let i = number.length - 1, result = 0, power = 1;
  do {
    if (number[i] < 0 || number[i] >= currentBase)
      throw new Error('Input has wrong format');
    result += number[i] * power;
    power *= currentBase;
  } while (i--)
  return result.toString().split("").map(Number);
}

function fromDecimal(num, targetBase) {
  const res = [];
  while (num) {
    res.unshift(num % targetBase);
    num = Math.floor(num / targetBase);
  }
  return res.length ? res : [num];
}