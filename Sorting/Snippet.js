/**
 * The aim of this snippet is to show whats possible with using the array sort method
 * As you can see below the sort function of the array accepts a sort function which tells
 * it how to sort the given data but it is not so efficient so we would look at other sorting techniques
 * @param {*} num1
 * @param {*} num2
 * @returns
 */

function numberCompare(num1, num2) {
  return num1 - num2;
}

console.log([6, 4, 15, 18, 9, 10].sort(numberCompare));

function compareByLength(str1, str2) {
  return str2.length - str1.length;
}

console.log(
  [
    "Steel",
    "Cole",
    "Jennifer Agu",
    "Steven Ude",
    "Algorithm",
    "Data Structures",
  ].sort(compareByLength)
);
