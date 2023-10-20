class Solution:
    def balancedStringSplit(self, s: str) -> int:
        n=len(s)
        max=0
        balance=0
        for i in range(n):
            if s[i]=="R":
                balance+=1
            elif s[i]=="L":
                balance-=1
            if balance==0:
                max+=1
        return max
            
        
