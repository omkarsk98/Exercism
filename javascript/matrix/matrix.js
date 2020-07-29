//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split("\n").map(el => el.split(" ").map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    let columns = [];
    this.matrix
      .forEach((row, ri) => {
        row.forEach((col, ci) => {
          (columns[ci] = columns[ci] || [])[ri] = this.matrix[ri][ci];
        });
      });
    return columns;
  }
}
