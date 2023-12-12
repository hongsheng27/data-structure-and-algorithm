const insertionSort = (arr) => {
  for (let j = 1; j < arr.length; j++) {
    let i = j - 1;
    let key = arr[j];
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }
  console.log(arr);
  return arr;
};

let unsorted = [14, -4, 17, 6, 22, 1, -5];
insertionSort(unsorted);
