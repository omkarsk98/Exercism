//check if the word is iscgram
export const isIsogram = (word) => {
  let wordCounts = word
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .reduce((counts = {}, char) => {
      counts[char] = (counts[char] || 0) + 1;
      return counts;
    }, {})
  let res = Object.values(wordCounts).filter(el => { return el > 1; });
  return res.length ? false : true;
};