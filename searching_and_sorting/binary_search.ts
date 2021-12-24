function binarySearch(listNumber: number[], num: number) {
  let lowIndex = 0;
  let highIndex = listNumber.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);

    if (listNumber[midIndex] === num) return midIndex;
    else if (num > listNumber[midIndex]) lowIndex = midIndex;
    else highIndex = midIndex;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 8));
