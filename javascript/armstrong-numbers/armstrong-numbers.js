//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  num = String(num);
  let pow = num.length;
  return num
    .split("")
    .reduce((sum = 0, el) => {
      sum += Number(el) ** pow;
      return sum;
    }, 0) == num ? true : false;
};
