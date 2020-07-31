export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(arr) {
    this.values = [...this.values, ...arr.values];
    return this;
  }

  concat(list) {
    list.values.forEach(el => {
      this.values = [...this.values, ...el.values]
    })
    return this;
  }

  filter(cond) {
    let res = { values: [] };
    this.values.forEach(el => {
      if (cond(el)) {
        res.values = [...res.values, el]
      }
    });
    return res;
  }

  map(cond) {
    let res = { values: [] };
    this.values.forEach(el => {
      res.values = [...res.values, cond(el)]
    });
    return res;
  }

  length() {
    let len = 0;
    this.values.forEach(() => len++);
    return len;
  }

  foldl(func, item) {
    this.values.forEach(val=>{
      item = func(item, val);
    });
    return item;
  }

  foldr(func, item) {
    [...this.values.reverse()].forEach(val=>{
      item = func(item, val);
    });
    return item;
  }

  reverse() {
    let res = { values: [] };
    this.values.forEach(el => {
      res.values = [el, ...res.values];
    });
    return res;
  }
}
