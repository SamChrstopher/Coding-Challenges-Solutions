class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        length=len(nums)
        result=[]
        for i in range(length):
            count=0
            for j in range(length):
                if(i!=j and nums[i]>nums[j]):
                    count+=1
            result.append(count)
        return result
