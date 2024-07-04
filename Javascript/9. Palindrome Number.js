//https://leetcode.com/problems/palindrome-number/description/
/*
 */
var isPalindrome = function (x) {
  let pali = 0,
    temp = Math.abs(x);
  do {
    pali *= 10;
    pali += x % 10;
    x = ~~(x / 10);
  } while (x > 0);

  return pali === temp ? true : false;
};
console.log(isPalindrome(-121));
