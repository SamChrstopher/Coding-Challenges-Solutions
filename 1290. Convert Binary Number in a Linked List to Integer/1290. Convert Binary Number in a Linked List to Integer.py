# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        data1=head
        data2=head
        count=-1
        sum=0

        while data1:
            count+=1
            data1=data1.next
        
        while data2:
            sum+=data2.val*(2**count)
            count-=1
            data2=data2.next
        return sum
        
