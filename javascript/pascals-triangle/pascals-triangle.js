/* 
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
# ... etc
*/
export const rows = (rows) => {
  let res = [];
  for (let i = 1; i <= rows; i++) {
    if (i == 1) {
      res.push([1]);
    }
    else if (i == 2) {
      res.push([1, 1]);
    }
    else {
      let arr = [1];
      let lastArr = res[i - 2];
      for (let index=0; index<lastArr.length-1; index++) {
        arr.push(lastArr[index] + lastArr[index + 1]);
      }
      arr.push(1);
      res.push(arr);
    }
  }
  return res;
};