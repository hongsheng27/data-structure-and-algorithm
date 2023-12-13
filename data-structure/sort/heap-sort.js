let heapSize;
let arr = [4, 1, 6, 10, 11, 3, 2, 14, 5, 13, 9, 7, 8, 12, 15];

const buildMaxHeap = () => {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
  // console.log("@", arr);
};

const maxHeapify = (i) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (arr[l] > arr[i] && l <= heapSize) {
    largest = l;
  }
  if (arr[r] > arr[largest] && r <= heapSize) {
    largest = r;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // console.log(arr, largest);
    maxHeapify(largest);
  }
};
const heapSort = () => {
  buildMaxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapSize--;
    maxHeapify(0);
  }
  return arr;
};

heapSort();
console.log(arr);
