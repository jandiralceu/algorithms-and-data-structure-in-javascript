function swap(listNumber: number[], firstIndex: number, secondIndex: number) {
  const temp = listNumber[firstIndex];
  listNumber[firstIndex] = listNumber[secondIndex];
  listNumber[secondIndex] = temp;
}

export { swap };
