function insertionSort(listNumber: number[]) {
  let currentValue: number;
  let i: number;
  let j: number;

  for (i = 0; i < listNumber.length; i++) {
    currentValue = listNumber[i];

    for (j = i - 1; j > -1 && listNumber[j] > currentValue; j--) {
      listNumber[j + 1] = listNumber[j];
    }

    listNumber[j + 1] = currentValue;
  }

  return listNumber;
}

console.log(insertionSort([6, 1, 23, 4, 2, 3]));
