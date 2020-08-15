export const classify = (num) => {
  if (num < 1)
    throw new Error('Classification is only possible for natural numbers.');
  let factors = [];

  for (let i = 1; i <= num / 2; i++) {
    if (!(num % i))
      factors.push(i);
  }
  const sum = factors.reduce((sum, el) => sum += el, 0);
  if (sum === num)
    return 'perfect';
  if (sum > num)
    return 'abundant';
  return 'deficient';
};
