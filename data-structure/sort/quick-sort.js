const arr = [2, 5, 7, 3, 1, 4];

const quickSort = (p, r) => {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
};
const partition = (p, r) => {
  let x = arr[r]; // pivort
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (arr[j] <= x) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  console.log(arr);
  return i + 1;
};

quickSort(0, arr.length - 1);
