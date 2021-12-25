import { swap } from "../shared/fn";

function selectionSort(numberList: number[]) {
  const numberListQuantity = numberList.length;
  let min: number;

  for (let i = 0; i < numberList.length; i++) {
    min = i;

    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[j] < numberList[min]) min = j;
    }

    if (i !== min) swap(numberList, i, min);
  }

  return numberList;
}

console.log(selectionSort([7, 2, 5, 1, 34, 6, 3, 18, 12, 22]));
