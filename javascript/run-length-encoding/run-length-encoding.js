export const encode = (str) => {
  let i = 0, res = '', charCount = 0, currentChar = str[0];
  const strLen = str.length;
  for (; i < strLen; i++) {
    if (currentChar == str[i]) {
      charCount++;
    }
    else {
      res += (charCount > 1 ? charCount : "") + currentChar;
      currentChar = str[i];
      charCount = 1;
    }
  }
  res += (charCount > 1 ? charCount : "") + (currentChar || "");
  return res;
};

export const decode = (str) => {
  let res = '';
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    let cnt = '';
    if (/[0-9]/.test(str[i])) {
      while (/[0-9]/.test(str[i])) {
        cnt += str[i];
        i++;
      }
      while (+cnt--)
        res += str[i];
    }
    else if (str[i] != res[res.length - 1])
      res += str[i];
  }
  return res;
};
