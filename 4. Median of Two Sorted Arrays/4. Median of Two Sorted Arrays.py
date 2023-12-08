class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        i, j =0, 0
        nums3=[]
        while i<len(nums1) and j<len(nums2):
            if nums1[i]<nums2[j]:
                nums3.append(nums1[i])
                i+=1
            else:
                nums3.append(nums2[j])
                j+=1
        while i<len(nums1):
            nums3.append(nums1[i])
            i+=1
        while j<len(nums2):
            nums3.append(nums2[j])
            j+=1
        n=len(nums3)
        if(n%2==1):
            median=nums3[n//2]
        else:
            middle_right=n//2
            middle_left=middle_right-1
            median=(nums3[middle_left]+nums3[middle_right])/2
        return median


        
