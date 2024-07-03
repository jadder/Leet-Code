/**I found two solutions
 * 1 the approach bellow
 * 2 using Regular Expression
 * 3 similar to the approach bellow but involving maths
 */
var isValid = function (s) {
  let i = s[0];
  if (s.length % 2 !== 0) return false;
  if (i === "]" || i === ")" || i === "}") return false;

  let closed = [];

  for (let i = 0; i < s.length; i++) {
    let S = s[i];
    switch (S) {
      case "(":
        closed.push(")");
        break;

      case ")":
        if (closed.pop() !== ")") return false;
        break;

      case "{":
        closed.push("}");
        break;

      case "}":
        if (closed.pop() !== "}") return false;
        break;

      case "[":
        closed.push("]");
        break;

      case "]":
        if (closed.pop() !== "]") return false;

        break;
    }
  }
  if (closed.length !== 0) return false;
  return true;
};

let s = "[([]])";
s = "([)]";
s = "()[]{}";

console.log(isValid(s));
