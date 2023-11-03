/**
 * This particular exercise is based on the Frequency Counter Pattern
 * This pattern uses objects or sets to collect values/frequencies of value.
 * This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
 * @param {This reprsents the first string} str1
 * @param {This reprsents the second string} str2
 * @returns True or false depending on the outcome!
 */

function validAnagram(str1, str2) {
  // check the length of the two strings if they match else exit
  if (str1.length != str2.length) {
    return false;
  }
  // create object to hold the characters from str1
  let lookup = {};

  // calculate the repetition of chars in the first string by iterating through
  for (var c of str1) {
    var char = c.toLowerCase();
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  // compare the repetition of chars in the second string to the lookup object
  for (var c of str2) {
    var char = c.toLowerCase();
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("azz", "zzaa"));
