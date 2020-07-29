//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (sec) => {
  let secCopy = sec.getTime();
  return new Date(secCopy+(1000000000*1000));
};
