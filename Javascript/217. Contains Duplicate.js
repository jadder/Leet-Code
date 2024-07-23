/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let mapa = new Map();
  let duplicado = false;
  for (let i = 0; i < nums.length; i++) {
    let valor = nums[i];
    if (mapa.has(valor)) {
      duplicado = true;
      break;
    } else {
      mapa.set(valor, 1);
    }
  }

  return duplicado;
};

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
