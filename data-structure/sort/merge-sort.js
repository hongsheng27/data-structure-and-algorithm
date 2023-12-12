const merge = (a1, a2) => {
  // a , b are sorted array
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] >= a2[j]) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }
  // a1 or a3 might have some elements left
  // use Loop to put them all into result
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }
  return result;
};
const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  } else {
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    const result = merge(mergeSort(left), mergeSort(right));
    return result;
  }
};

let array = [15, 3, 17, 18, 35, 11, 0, 36, -336, 1054];
mergeSort(array);
