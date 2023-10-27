/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head!==null && head.val===val){
        head=head.next
    }
    var prev=head
    var current=prev!=null ? prev.next : null
    while(current!==null && prev!==null){
        if(current.val===val){
            prev.next=current.next
        }
        else{
            prev=prev.next
        }        
        current=prev!=null ? prev.next : null
    }
    return head    
};