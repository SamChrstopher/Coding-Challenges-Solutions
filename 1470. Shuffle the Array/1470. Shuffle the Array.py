class Solution:
    def shuffle(self, nums, n):
        ans=[]
        x=nums[:n]
        y=nums[n:]

        for i in range(n):
            ans.append(x[i])
            ans.append(y[i])
        return ans
