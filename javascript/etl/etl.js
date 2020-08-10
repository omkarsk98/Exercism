export const transform = (old) => {
  return Object.keys(old).reduce((res = {}, el)=>{
    old[el].forEach(char=>{res[char.toLowerCase()] = Number(el)});
    return res;
  }, {});
};
