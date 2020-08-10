export const commands = (num) => {
  let bin = (num >>> 0).toString(2).split("");
  let codes = ["wink", "double blink", "close your eyes", "jump"]
  let res = [];
  let i = 0;
  // console.log("Bin:", bin);
  while (i < 4 && bin.length) {
    if (bin.pop() == 1)
      res.push(codes.shift());
    else
      codes.shift()
    i++
  }
  if (bin.length)
    res = res.reverse();
  return res;
};

// let res = commands(8);
// console.log("Res:", res);