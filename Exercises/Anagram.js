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
  // create objects to hold the respective characters of each string and their repetitions
  let objStr1 = {};
  let objStr2 = {};

  // calculate the repetition of chars in the first string by iterating through
  for (var c of str1) {
    var char = c.toLowerCase();
    objStr1[char] ? (objStr1[char] += 1) : (objStr1[char] = 1);
  }

  // calculate the repetition of chars in the second string by iterating through
  for (var c of str2) {
    var char = c.toLowerCase();
    objStr2[char] ? (objStr2[char] += 1) : (objStr2[char] = 1);
  }
  //compare if the words repetition of both strings match
  for (let key in objStr1) {
    if (!objStr2.hasOwnProperty(key)) {
      return false;
    }
    if (objStr1[key] !== objStr2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("azz", "zza"));
