/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let result = Number.MAX_SAFE_INTEGER,
    sum = 0,
    wStart = 0,
    wEnd = -1,
    salir = false,
    flag = true,
    rango = 0;

  while (!salir) {
    if (sum < target) {
      if (wEnd < nums.length) {
        wEnd++;
        sum += nums[wEnd];
        rango++;
      }
    } else {
      sum -= nums[wStart];
      if (wStart < nums.length) {
        wStart++;
        rango--;
      }
    }
    if (sum >= target) {
      if (rango < result) {
        flag = false;
        result = rango;
      }
    }

    if (wStart >= nums.length - 1) {
      salir = true;
    }
  }

  if (flag) {
    return 0;
  } else {
    return result;
  }
};
