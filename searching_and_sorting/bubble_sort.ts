function swap(listNumber: number[], firstIndex: number, secondIndex: number) {
  let temp = listNumber[firstIndex];
  listNumber[firstIndex] = listNumber[secondIndex];
  listNumber[secondIndex] = temp;
}

function bubbleSort(listNumber: number[]) {
  for (let i = 0, arrayLength = listNumber.length; i < arrayLength; i++) {
    for (let j = 0; j <= i; j++) {
      if (listNumber[i] < listNumber[j]) swap(listNumber, i, j);
    }
  }

  return listNumber;
}

console.log(bubbleSort([6, 1, 4, 7, 5, 2, 3]));
