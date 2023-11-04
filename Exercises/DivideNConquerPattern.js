/**
 * This pattern involves dividing a data set into smaller chunks and then
 * repeating a process with a subset of data.
 *
 * This pattern can drastically reduce time complexity
 * Below are the naive and otpimised versions
 * This is more advanced and reeoccurs in some sorting and searching algorithm
 */

/**
 * This function accepts a value and returns the index where the value passed to the function is located.
 * Note: The array must be sorted but If the value is not found, return -1
 * eg. example([2,4,6,8,9],3) this should return -1 as 3 is not in the array
 * This implementation is the naive approach
 * This has a time complexity of Big O(N)
 */
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(search([2, 4, 6, 8, 9], 9));

/**
 * This is the optimised approach which implements proper Divide and Conquer technique
 */
function searchRefactor(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      //move left pointer to right half
      min = middle + 1;
    } else if (arr[middle] > val) {
      // move right pointer to left half
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
