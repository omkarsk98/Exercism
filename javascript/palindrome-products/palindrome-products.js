export class Palindromes {
  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor)
      throw new Error('min must be <= max')
    let products = {};
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        let product = (i * j).toString();
        if (product === product.split("").reverse().join("")) {
          (products[product] = products[product] || []).push([i, j]);
        }
      }
    }
    let list = Object.keys(products);
    let [smallest, largest] = list.length !== 0 ? [Math.min(...list), Math.max(...list)] : [null, null];
    return {
      smallest: { value: smallest, factors: products[smallest] || [] },
      largest: { value: largest, factors: products[largest] || [] }
    }
  }
}
