export const parse = (str) => {
  return str
    .replace(/[^a-z\-\ ]/gi, "")
    .match(/\b(\w)/g)
    .join("")
    .toUpperCase();
};
