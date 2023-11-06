// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

// Simpler recursive funtion
function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// Factorial eg. 4! which means 4*3*2*1
function findFactorial(num) {
  if (num === 1) return 1;
  return num * findFactorial(num - 1);
}

/**
 * Having an outter function that houses the recursion is important for two reasons
 * firstly, it holds the variable like an array that needs to be populated or depopulated
 * as putting it directly inside the recursive function would always reset the variable
 * secondly, it makes the code more readable as variables are not left floating.
 */
function collectOddValues() {
  let arr = [];
  function helperFunction(helperInput) {
    if (helperInput === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      arr.push(helperInput[0]);
    }

    helperFunction(helperInput.slice(1));
  }
  helperFunction(arr);
  return arr;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
