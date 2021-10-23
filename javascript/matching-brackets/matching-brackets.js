const EXPECTED = { '{': '}', '(': ')', '[': ']' };

export const isPaired = (str) => {
  const stack = [];
  for (let key of str.replace(/[^\{\}\[\]\(\)]/g, "")) {
    if (EXPECTED[key])
      stack.push(key)
    else if (key !== EXPECTED[stack.pop()])
      return false;
  }
  return !stack.length;
};
