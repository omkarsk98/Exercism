//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (str, list) => {
  const hash = new Array(26);
  str
    .toLowerCase()
    .forEach(ch => {
      hash[ch.charCodeAt(0) - 97] = 1;
      hash = hash.toString();
    })
  return list.reduce((arr, el) => {
    const elHash = new Array(26);
    el
      .toLowerCase()
      .forEach(ch => {
        elHash[ch.charCodeAt(0) - 97] = 1;
        elHash = elHash.toString();
      })
    if (elHash === hash)
      arr.push(el);
    return arr;
  });
};
