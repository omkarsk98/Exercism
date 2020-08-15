export const keep = (arr, cond) => {
  return arr.filter(cond);
};

export const discard = (arr, cond) => {
  return arr.filter(el=>!cond(el));
};
