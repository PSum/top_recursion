function fibonacciRecursive(
  n,
  number1 = 0,
  number2 = 1,
  result = [0, 1],
  run1 = true
) {
  if (n == 0) {
    return result;
  }
  if (run1 == true) {
    n = n - 2;
    run1 = false;
  }
  result.push(number1 + number2);
  let temp;
  temp = number2;
  number2 = number1 + number2;
  number1 = temp;
  return fibonacciRecursive(n - 1, number1, number2, result, (run1 = false));
}

console.log(fibonacciRecursive(7));
