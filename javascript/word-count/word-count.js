export const countWords = (str) => {
  return str
    .toLowerCase()
    .match(/\w+('[a-z])?/g)
    .reduce((counts = {}, word) => {
      counts[word] = (counts[word] || 0) + 1;
      return counts;
    }, {});
};
