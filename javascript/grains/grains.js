export const square = (square) => {
  if (square > 64 || square < 1)
    throw new Error('square must be between 1 and 64')
  return BigInt(2 ** (square - 1));
};

export const total = (sqaures = 64) => {
  return new Array(sqaures)
    .fill(0)
    .reduce((sum, el, i) => {
      return sum += BigInt(2 ** i);
    }, BigInt(0));
};
