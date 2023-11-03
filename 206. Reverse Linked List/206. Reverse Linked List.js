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
var reverseList = function(head) {
    var current=head
    var prev=null
    var next=null
    while(current!==null){
        next=current.next
        current.next=prev
        prev=current
        current=next
    }
    return prev
};