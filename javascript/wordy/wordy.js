export const answer = (question) => {
  let queue = [];
  question
    .toLowerCase()
    .replace(/(what|is|by|\?)/g, "")
    .split(" ")
    .forEach(word => {
      if (word.match(/[0-9]+/))
        queue.push(Number(word));

      else if (word.match(/plus/))
        queue.push("+");

      else if (word.match(/minus/))
        queue.push("-");

      else if (word.match(/multi/))
        queue.push("*");

      else if (word.match(/divide/))
        queue.push("/");

      else if (word.length)
        throw new Error("Unknown operation");
    });

  if (!queue.length)
    throw new Error("Syntax error");

  let res = queue.shift();
  while (queue.length) {
    let el = queue.shift();
    let nextNum = queue.shift();
    if (typeof (nextNum) != "number")
      throw new Error("Syntax error");
    if (el == "+")
      res += nextNum
    else if (el == "-")
      res -= nextNum
    else if (el == "*")
      res *= nextNum
    else if (el == "/")
      res /= nextNum
    else
      throw new Error("Syntax error")
  }
  return res;
};

// let res = answer("What is plus 1 2?");
// console.log("Res:", res);