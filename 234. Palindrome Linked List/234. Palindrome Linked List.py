# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        def reverseLinkedList(node):
            current=node
            prev=None
            next=None
            while(current is not None):
                next=current.next
                current.next=prev
                prev=current
                current=next
            return prev
        
        if(head is None or head.next is None):
            return True
        
        slow=head
        fast=head
        while(fast is not None and fast.next is not None):
            fast=fast.next.next
            slow=slow.next
                    
        secondHalf=reverseLinkedList(slow)

        while(secondHalf is not None):
            if(head.val!=secondHalf.val):
                return False
            head=head.next
            secondHalf=secondHalf.next
        return True
        
