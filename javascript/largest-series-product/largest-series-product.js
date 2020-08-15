export const largestProduct = (input, n) => {
  if (n < 0)
    throw new Error('Span must be greater than zero');
  if (input.length < n)
    throw new Error('Span must be smaller than string length');
  if (input.match(/[^0-9]/g))
    throw new Error('Digits input must only contain digits');
  const arr = input.split("").map(Number);
  let max = arr.slice(0, n).reduce((prod = 1, num) => prod *= num, 1),
    i = 1, j = n;
  let prod = max;
  while (j < arr.length) {
    prod = (prod / (arr[i - 1] || 1)) * arr[j];
    // handle 0 case because that sub array product isnt available
    if (prod === arr[i - 1] && prod == 0)
      prod = arr.slice(i, j + 1).reduce((prod, num) => prod * num, 1);
    max = Math.max(prod, max);
    i++;
    j++;
  }
  return max;
};
