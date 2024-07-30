//142. Linked List Cycle II
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let result = null;

  let flag = false;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      if (slow === head) {
        return slow;
      }
      slow = head;
      flag = true;
      break;
    }
  }

  if (!flag) {
    return null;
  } else {
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;

      if (slow === fast) {
        return slow;
      }
    }
  }
  return null;
};
