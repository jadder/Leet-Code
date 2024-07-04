/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] != needle[0]) {
      continue;
    } else {
      let igual = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          igual = false;

          break;
        }
      }
      if (igual) {
        return i;
      }
    }
  }
  return -1;
};

let haystack = "mississippi",
  needle = "issip";

console.log(strStr(haystack, needle));
