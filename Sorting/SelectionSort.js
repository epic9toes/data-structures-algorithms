/**
 * This is simmilar to Bubble Sort but instead of first placing large values
 * into sorted positions, it places small values into sorted position.
 * starting from the beginning of the array until the end.
 * This apporach has a complexity of O(N^2) which is bad
 * There is only one scenario where selction is better than bubble which is if you are in a
 * situation you want to minimise the number of swaps you want to do
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
