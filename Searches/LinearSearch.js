/**
 * Linear search is a basic searching algorithm used to find a specific element
 * in an array or list. It works by sequentially checking each element of the
 * array until a match is found or the entire array has been searched. Linear
 * search is straightforward but not very efficient for large datasets, as it
 * has a time complexity of O(n), where n is the number of elements in the array.
 */

/** How it compares to JavaScript Array Functions
JavaScript provides array functions that offer more efficient and concise ways to search, manipulate, and process arrays compared to manual linear search. These array functions are typically more readable and are optimized for performance.
 */

//Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found the target element
    }
  }
  return -1; // Target element not found
}

const array1 = [2, 4, 6, 8, 10];
const targetValue1 = 6;
const result1 = linearSearch(array1, targetValue1); // Returns 2 (index of 6)

// Using `.indexOf()` (JavaScript Array Function)

const array2 = [2, 4, 6, 8, 10];
const targetValue2 = 6;
const result2 = array.indexOf(targetValue2); // Returns 2 (index of 6)

// Using `.findIndex()` (JavaScript Array Function)

const array = [2, 4, 6, 8, 10];
const isEven = (element) => element % 2 === 0;
const result = array.findIndex(isEven); // Returns 0 (index of the first even number, 2)

/**
 * JavaScript array functions like `.indexOf()` and `.findIndex()` provide more concise and efficient ways to search for elements in arrays compared to manual linear search
 * */
