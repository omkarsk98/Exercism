export const transpose = (mat) => {
  return Array.from({
    length: Math.max(...mat.map(i => i.length))
  }, (v, i) =>
    mat.reduce((acc, cur, idx) => acc +
      (cur.charAt(i)
        ? cur.charAt(i).padStart(idx + 1 - acc.length, " ")
        : ""),
      "")
  );
};
