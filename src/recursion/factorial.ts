function factorial(value: number) {
  if (value <= 1) return 1;
  else return value * factorial(value - 1);
}

console.log(factorial(6));
