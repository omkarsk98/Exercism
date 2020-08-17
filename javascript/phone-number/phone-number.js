export const clean = (number) => {
  if (number.match(/[a-z]/gi))
    throw new Error('Letters not permitted');
  if (number.match(/[a-z]/gi))
    throw new Error('Letters not permitted');
  number = number.replace(/[^\d]/g, "");
  if (number.length < 10)
    throw new Error('Incorrect number of digits');
  if (number.match(/1[\d]{10}$/g))
    throw new Error('11 digits must start with 1');
  if (number.length >= 11)
    throw new Error("More than 11 digits");
  number[0] == 1 ? number.shift() : null;
  return number;
};
