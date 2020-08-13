export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    const { a, b, c } = this;
    return a + b + c;
  }

  product() {
    const { a, b, c } = this;
    return a * b * c;
  }

  isPythagorean() {
    const { a, b, c } = this;
    return ((a ** 2) + (b ** 2)) == c ** 2;
  }

  static where(options) {
    let triplets = [];
    const { maxFactor, minFactor = 3, sum } = options;
    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a + 1; b <= maxFactor; b++) {
        let c = Math.sqrt(a ** 2 + b ** 2);
        if (Number.isInteger(c) && c <= maxFactor) {
          let trip = new Triplet(a, b, c);
          if (sum && trip.sum() == sum)
            triplets.push(trip);
          else if (!sum)
            triplets.push(trip);
        }
      }
    }
    return triplets;
  }
}
