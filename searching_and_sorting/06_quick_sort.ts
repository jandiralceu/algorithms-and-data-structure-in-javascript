export function partition(numbersList, left, right) {
  let pivot = numbersList[Math.floor((right + left) / 2)];

  while (left <= right) {
    while (pivot > numbersList[left]) {
      left++;
    }
    while (pivot < numbersList[right]) {
      right--;
    }

    if (left <= right) {
      const temp = numbersList[left];

      numbersList[left] = numbersList[right];
      numbersList[right] = temp;

      left++;
      right--;
    }
  }

  return left;
}

function quickSortHelper(numbersList, left, right) {
  let index: number;

  if (numbersList.length > 1) {
    index = partition(numbersList, left, right);

    if (left < index - 1) quickSortHelper(numbersList, left, index - 1);
    if (index < right) quickSortHelper(numbersList, index, right);
  }

  return numbersList;
}

function quickSort(numbersList: number[]) {
  return quickSortHelper(numbersList, 0, numbersList.length - 1);
}

console.log(quickSort([6, 1, 23, 4, 2, 3]));
