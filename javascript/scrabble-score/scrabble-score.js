export const score = (word) => {
  word = word.toUpperCase();
  let counts = {
    "1": (word.match(/[AEIOULNRST]/g) || []).length,
    "2": (word.match(/[DG]/g) || []).length,
    "3": (word.match(/[BCMP]/g) || []).length,
    "4": (word.match(/[FHVWY]/g) || []).length,
    "5": (word.match(/[K]/g) || []).length,
    "8": (word.match(/[JX]/g) || []).length,
    "10": (word.match(/[QZ]/g) || []).length
  };
  return Object.keys(counts)
    .reduce((score = 0, el) => {
      return score += Number(el) * counts[el];
    }, 0);
};
