const process = (mat) => {
  const maxColLen = Math.max(...mat.map(el => el.length));
  mat = mat.map(el => el.split(""));
  let res = [];

  mat = mat.map(el => el.padEnd(maxColLen));
  for (let i = 0, len = Math.max(mat.length, maxColLen); i < len; i++) {
    let col = mat.map(el => el[i] || "").join("").trimEnd();
    const diff = mat.length - col.length;
    // if (diff)
    //   col = new Array(diff).fill(" ") + col;
    if (col.length)
      res.push(col);
  }
  return res;
}