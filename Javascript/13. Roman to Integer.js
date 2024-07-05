/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romano = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let cases = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
  let suma = 0;

  for (let i = 0; i < s.length; i++) {
    let actual = s[i];
    let next = i + 1 < s.length ? s[i + 1] : 0;

    let temp = actual + next;
    if (cases[temp] !== undefined) {
      suma += cases[temp];
      i++;
    } else {
      suma += romano[actual];
    }
  }

  return suma;
};

console.log(romanToInt("MMMMCDXLIV"));
