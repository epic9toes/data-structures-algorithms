/**
 * Binary search is an efficient search algorithm used to find a specific element
 * in a sorted array. It works by repeatedly dividing the search interval in
 * half, eliminating half of the remaining elements in each step. Binary search
 * has a time complexity of O(log n), where n is the number of elements in the
 * array. It is significantly faster than linear search, especially for large datasets.
 */

/**
 * Comparison to JavaScript Array Functions:
Binary search is particularly effective for sorted arrays and is not directly comparable 
to most JavaScript array functions, which are designed for unsorted arrays and provide 
various functionalities beyond searching. JavaScript array functions often have a time 
complexity of O(n) for searching operations.
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Found the target element
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Target element not found
}

const sortedArray = [2, 4, 6, 8, 10];
const targetValue = 6;
const result = binarySearch(sortedArray, targetValue); // Returns 2 (index of 6)

/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)

Binary search offers a significant advantage in time complexity 
over linear search, particularly for large datasets. Its space 
complexity is constant, as it uses only a few variables.
 */
