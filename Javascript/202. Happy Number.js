// 202. Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let mySet = new Set();

  while (n !== 1 && !mySet.has(n)) {
    mySet.add(n);
    n = Happy(n);
  }
  return n === 1;
};

function Happy(nn) {
  let result = 0;
  while (nn > 0) {
    let unidad = nn % 10;
    nn = Math.floor(nn / 10);
    result += unidad * unidad;
  }
  return result;
}
