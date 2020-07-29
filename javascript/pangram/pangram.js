//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let letters = {};
  sentence.split("").forEach(letter=>{
    if(letter.toLowerCase().charCodeAt()>="a".charCodeAt() && letter.toLowerCase().charCodeAt()<="z".charCodeAt())
      letters[letter.toLowerCase()] = (letters[letter.toLowerCase()] || 0) + 1;
  })
  return Object.keys(letters).length==26;
};
