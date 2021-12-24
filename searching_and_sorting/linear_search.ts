// Checking if a given number, exists in a given array, using a linear search approach.

function linearSearch(listNumber: number[], num: number) {
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] === num) return true;
  }

  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 22));
