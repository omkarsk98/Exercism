export const saddlePoints = (matrix) => {
  let saddles = [], cols = [];
  for (let i = 0; i < Math.max(matrix[0].length, matrix.length); i++)
    cols.push(matrix.map(el => { return el[i] }));
  
  matrix.forEach((row, i) => {
    row.forEach((el, j) => {
      if (Math.max(...row) == el && Math.min(...cols[j]) == el)
        saddles.push({ row: i + 1, column: j + 1 });
    });
  });
  return saddles;
};
