export class GradeSchool {
  constructor() {
    this.data = {};
  }
  roster() {
    let res = {}
    Object.keys(this.data).forEach(el => {
      res[el] = [...this.data[el]].sort();
    });
    // return a copy of the object so that it cannot be modified
    return { ...res };
  }

  add(name, grade) {
    // return new object instead of mutating
    return this.data = {
      ...this.data,
      [grade]: [...(this.data[grade] || []), name].sort()
    }
  }
  
  grade(grad) {
    // return a copy of the array so that it cannot be mutated
    return [...(this.data[grad] = this.data[grad] || [])].sort();
  }
}
