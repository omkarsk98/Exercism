//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isEquilateral() {
    if(!this.isValid())
      return false;
    return this.a == this.b && this.a == this.c;
  }

  isIsosceles() {
    if(!this.isValid())
      return false;
    return this.a == this.b || this.b == this.c || this.a == this.c;
  }

  isScalene() {
    if(!this.isValid())
      return false;
    return this.a != this.b && this.a != this.c;
  }
  isValid() {
    if (!this.a || !this.b || !this.c)
      return false;
    return this.a + this.b > this.c && this.b + this.c > this.a && this.a + this.c > this.b ? true : false;
  }
}
