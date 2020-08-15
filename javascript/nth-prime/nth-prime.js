export const prime = (n) => {
  if (!n)
    throw new Error('there is no zeroth prime');
  let i = 0, num = 2;
  while (i != n) {
    if (isPrime(num)) {
      i++;
    }
    num++;
  }
  return --num;
}

const isPrime = (n) => {
  for (let i = 2; i <= n - 1; i++)
    if (n % i == 0) {
      return false;
    }
  return true;
}