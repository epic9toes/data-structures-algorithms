/**
 * The sliding window pattern invovles creating a window which can
 * either be an array or number from one position to another.
 * Depending on a certain condition, the window either increases or
 * closes (and a new window is created)
 *
 * This is very useful for keeping track of a subset of data in an array/string etc.
 * Below are examples both naive and optimized
 */

/**
 * This is a function that accepts an array of integers and a number
 *  called n. The function should calculate the max sum of consecutive elements
 * in the array.
 * eg. given an array of [2,5,8,9,4,5,3,1,7] calculate the sum of the consecutive
 * elements in the array when n is 4. pick first 4 items in the array and calc then
 * hold the max somewhere and move on to the next 4 elements until you reach the last 4 elements in the array.
 * This is the conventional way of doing it which has a Big O of O(N^2) as it has a nested loop which
 * will make n grow with time and size of input.
 *
 */
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    return max;
  }
}

/**
 * This is same function as above but implements the Sliding Window approach
 * It has a Big O of O(N) since it does not have a nested loop thus more efficient
 *
 */
function maxSubarraySumRefactor(arr, num) {
  let maxSum = 0;
  let tempSum = o;
  if (arr.length < num) {
    return null;
  }
  //iterate over the array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
