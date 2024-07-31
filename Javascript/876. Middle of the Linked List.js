// Definición del nodo de la lista enlazada
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Función para convertir un array en una lista enlazada
function arrayToList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

//876. Middle of the Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Array de entrada
let values = [1, 2, 3, 4, 5];

// Convertir el array en una lista enlazada
let head = arrayToList(values);

// Llamar a la función middleNode
let middle = middleNode(head);

// Mostrar el valor del nodo del medio
while (middle) {
  console.log(middle.val); // Debería imprimir 3
  middle = middle.next;
}
