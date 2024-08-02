/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let lista = [];
  while (head) {
    lista.push(head.val);
    head = head.next;
  }

  //invertir lista
  let listaInvertida = [];
  for (let i = 0; i < lista.length; i++) {
    listaInvertida.push(lista[lista.length - 1 - i]);
  }

  //check list manually
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] !== listaInvertida[i]) {
      return false;
    }
  }

  return true;
};
