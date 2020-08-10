export class NucleotideCounts {
  static parse(dna) {
    let counts = {
      "A": 0,
      "C": 0,
      "G": 0,
      "T": 0
    };
    counts = dna
      .split("")
      .reduce((counts, el) => {
        if(typeof counts[el]=="undefined")
          throw new Error('Invalid nucleotide in strand');
        counts[el] = counts[el] + 1;
        return counts;
      }, counts)
    return Object.values(counts).join(" ");
  }
}
