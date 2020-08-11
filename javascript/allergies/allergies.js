export class Allergies {
  constructor(count) {
    let data = {
      "128": "cats",
      "64": "pollen",
      "32": "chocolate",
      "16": "tomatoes",
      "8": "strawberries",
      "4": "shellfish",
      "2": "peanuts",
      "1": "eggs",
    };
    this.allergyList = [];
    let n = 128;
    while (n >= 1 && count >= 1) {
      if (!data[count] && count > 2 * n) {
        count -= n;
        continue;
      }
      if (count >= n) {
        this.allergyList.push(data[n]);
        count -= n;
      }
      n /= 2;
    }
  }

  list() {
    return this.allergyList.reverse();
  }

  allergicTo(allergy) {
    return this.allergyList.includes(allergy);
  }
}
