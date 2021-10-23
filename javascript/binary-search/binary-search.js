export const find = (arr, num) => {
  return binarySearch(arr, num);
};

const binarySearch = (arr, num) => {
  if (!arr.length)
    throw new Error('Value not in array');
  const mid = Math.floor(arr.length - 1 / 2);
  if (arr[mid] === num)
    return mid;
  if (arr[mid] > num)
    return binarySearch(arr.slice(0, mid), num);
  return binarySearch(arr.slice(mid + 1), num);
}