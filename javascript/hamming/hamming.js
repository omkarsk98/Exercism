export const compute = (str1, str2) => {
  if (!str1.length && str2.length)
    throw new Error("left strand must not be empty");

  if (!str2.length && str1.length)
    throw new Error("right strand must not be empty");

  if (str1.length != str2.length)
    throw new Error("left and right strands must be of equal length");

  let cnt = 0;
  for (let i in str1) {
    if (str1[i] != str2[i])
      cnt++;
  }
  return cnt;
};
