/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let mapa = new Map();
  let duplicado = false;
  for (let i = 0; i < nums.length; i++) {
    let valor = nums[i];
    if (mapa.has(valor)) {
      return valor;
      break;
    } else {
      mapa.set(valor, 1);
    }
  }

  return duplicado;
};
