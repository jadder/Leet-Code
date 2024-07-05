/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let nodo = result;
  let llevo = 0;

  while (l1 !== null || l2 !== null || llevo !== 0) {
    //mientras existan valores para agregar se estare ejecuanto
    let a = 0,
      b = 0,
      sum = 0; //a number1, b number2

    if (l1 !== null) {
      //this can be simplify by using ternary operator
      a = l1.val;
    } else {
      a = 0;
    }
    if (l2 !== null) {
      b = l2.val;
    } else {
      b = 0;
    }

    sum = a + b + llevo;

    if (sum < 10) {
      //this logic can be compatec too but I decide to do it this way to see each step.
      llevo = 0;
      nodo.next = new ListNode(sum);
    } else {
      llevo = 1;
      nodo.next = new ListNode(sum % 10);
    }

    nodo = nodo.next; //move to the next node

    l1 = l1 !== null ? l1.next : null;
    l2 = l2 !== null ? l2.next : null;
  }
  return result.next;
};
