let m = `1 2 3 4\n5 6 7 8\n9 8 7 6`;
let mat = m
  .split("\n")
  .map(el =>
    el.split(" ").map(Number)
  );
mat.forEach(el => console.log(el));
let columns = []
let res = mat
  .forEach((row, ri) => {
    row.forEach((col, ci) => {
      columns[ci]=columns[ci] || [];
      // if (!columns[ci])
      //   columns[ci] = [];
      columns[ci][ri] = mat[ri][ci];
    });

  });

res = res || null;
res = mat
  .map((row, ri) => {
    let colu = row.map((col, ci) => {
      (columns[ci] = columns[ci] || [])[ri] = mat[ri][ci];
      columns[ci][ri] = mat[ri][ci];
      return mat[ri][ci]
    });
    console.log("colu:", colu);
    return colu
  });

console.log("New:", columns);
console.log("Map:", res);