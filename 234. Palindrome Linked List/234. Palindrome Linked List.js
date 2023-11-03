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
var isPalindrome = function(head) {
    var reverseLinkedList=function(node){
        let current=node
        let prev=null
        let next=null
        while(current!==null){
            next=current.next
            current.next=prev
            prev=current
            current=next
        }
        return prev
    }
    if(head===null || head.next===null){
        return true
    }
    var slow=head
    var fast=head
    while(fast!==null && fast.next!==null){
        slow=slow.next
        fast=fast.next.next
    }
    var secondHalf=reverseLinkedList(slow)
    
    while(secondHalf!==null && head!==null){
        if(head.val!==secondHalf.val){
            return false
        }
        head=head.next
        secondHalf=secondHalf.next
    }
    return true   
};