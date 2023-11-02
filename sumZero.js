/**
 * The below method demostrates the Multiple Pointers Pattern
 * Creating pointers or values that correspond to an index or postion
 * and move towards the beginning, end or middle based on a certain condition
 *
 * This approach is very effiecient for solving problems with minimal space complexity as well
 *
 *
 *  This function should accept sorted array, find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does
 * not exist.
 */

// This method shows the naive way of handling
// multiple pointers pattern which has a Big O of O(N^2)
function naive_sum_zero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(naive_sum_zero([-4, -3, -2, -1, 0, 1, 2, 5]));

// This is the Multiple pointer recommended method which has a time complexity of O(N)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    // If we found our pair, then return it
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// This function should accept a sorted array
// There can be negative numbers in the array but it has to be sorted.
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([]));
