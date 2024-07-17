//340. Longest Substring with At Most K Distinct Characters
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let track = 0;
  let subStr = "";
  let result = Number.MIN_SAFE_INTEGER;

  for (let start = 0; start < s.length; start++) {
    if (track > k) {
      start--; // like a pause to allow move end pointer
      let c = subStr[0];
      subStr = subStr.slice(1);
      if (!subStr.includes(c)) {
        track--;
      }
    } else {
      if (!subStr.includes(s[start])) {
        track++;
      }
      subStr += s[start];
    }

    if (result < subStr.length && track <= k) {
      result = subStr.length;
    }
  }

  return result !== Number.MIN_SAFE_INTEGER ? result : 0;
};

//llamada
let s = "eceba";
let k = 2;

console.log(lengthOfLongestSubstringKDistinct(s, k));
