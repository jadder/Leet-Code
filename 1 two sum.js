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
