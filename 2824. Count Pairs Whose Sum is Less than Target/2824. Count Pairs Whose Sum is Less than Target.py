class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        n=len(nums)
        count=0
        for i in range(n-1):
            for j in range(1,n):
                if i<j and nums[i]+nums[j]<target:
                    count+=1
        return count
