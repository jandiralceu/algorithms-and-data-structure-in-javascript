// Insertion sort works similarly to selection sort by searching the array sequentially
// and moving the unsorted items into a sorted sublist on the left side of the array. 

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

// Time Complexity: O(n^2)
// Space Complexity: O(1)
