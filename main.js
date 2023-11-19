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

// console.log(fibonacciRecursive(7));

const testarray = [2, 1, 5, 1, 4, 3, 2];
const array2 = [2];

function mergeSort(arr) {
  let n = arr.length;
  if (n < 2) {
    return arr;
  }
  let leftlength = Math.floor(n / 2);
  let rightlength = n - leftlength;
  let leftArray = arr.slice(0, leftlength);
  let rightArray = arr.slice(-rightlength);
  let leftsorted = mergeSort(leftArray);
  let rightsorted = mergeSort(rightArray);
  console.log(`left Array: ${leftsorted} and rigth Array: ${rightsorted}`);

  return merge(leftsorted, rightsorted);
}

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort(testarray));
