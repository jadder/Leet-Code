/*
Solution:
  Given that there always exists a pair a + b = target, regardless of whether 
  the target number is negative or positive, the solution remains the same.
  
  Steps to find the pair [X, Y] where X + Y = target:
  
  1. Take a number X from the array and subtract it from the target to find the 
     second number Y needed.
  2. Find the index of X from the beginning (START) to the end (END) of the array.
  3. Find the index of Y from the end (END) to the beginning (START) of the array.
  4. Return [X, Y].
*/

var twoSum = function (nums, target) {
  let a = 0,
    b = 0;

  for (let i = 0; i < nums.length; i++) {
    [a, b] = [nums[i], target - nums[i]];

    if (nums.lastIndexOf(b) != -1) {
      [a, b] = [nums.indexOf(a), nums.lastIndexOf(b)];
      if (a != b) break;
    }
  }

  return [a, b];
};
