/**
 * Bubble Sort is not all that efficient and it not commonly used but there a case
 * where it does excel but learning it does not mean you'd have need to use as it is hardly good.
 * It just helps build on one's knowlegde of learning other algorithm.
 *
 * Bubble Sort is a sorting algorithm where the largest values bubble up to the top by swapping!
 *
 */

// This is the naive approach
// This apporach would mean that the iteration will go through the loop
// to the end everytime as against the frequency reduces with each sorted item at the end
function naiveBubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// This approach is a bit better as it reduces the time it takes to go through the array
// This apporach would mean that the iteration will go through the loop
// in reduced frequency as each sorted item get to the end.
function naiveBubbleSort2(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// This approach is the optimised approach
// This apporach would mean that the iteration will go through the loop
// in reduced frequency as each sorted item get to the end and also stop if the item
// is almost sorted and has no need to go through the entire array.
// by checking if noSwaps was previously done then it means the array is sorted.
function naiveBubbleSort2(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(naiveBubbleSort([37, 45, 29, 8]));

function swap(arr, indx1, indx2) {
  let temp = arr[indx1];
}
