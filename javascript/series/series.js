export class Series {
  constructor(digits) {
    this.digitStr = digits;
  }

  get digits() {
    return this.digitStr.split("").map(Number);
  }

  slices(window) {
    const arr = this.digits;
    if (window > arr.length)
      throw new Error('Slice size is too big.');
    let res = [];
    for (let i = 0, j = window; j <= arr.length; i++, j++)
      res.push(arr.slice(i, j));
    return res;
  }
}
