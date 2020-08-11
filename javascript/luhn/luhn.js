export const valid = (num) => {
  if (num.length <= 1 || num.match(/[^0-9\ ]/g) || num.match(/^\ +[0]$/))
    return false;
  num = num.replace(/\ /g, "").split("")
  let i = num.length - 2;
  while (i >= 0) {
    num[i] = Number(num[i]) * 2;
    if (num[i] > 9) num[i] -= 9;
    i -= 2;
  }
  return num
    .reduce((sum = 0, el) => {
      return sum += Number(el)
    }, 0) % 10 == 0 ? true : false;
};
