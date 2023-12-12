const bubbleSort = (arr) => {
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      //   console.log(j);
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapping = true;
        console.log(arr);
      }
    }
    if (!swapping) {
      return;
    }
  }

  console.log(arr);
  return arr;
};

let test = [];
for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}
bubbleSort(test);
