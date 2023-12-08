class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int i=0;
        int j=0;
        int k=0;
        int n1=nums1.length;
        int n2=nums2.length;
        int [] nums3=new int[n1+n2];
        
        while(i<n1 && j<n2){
            if(nums1[i]<nums2[j]){
                nums3[k]=nums1[i];
                i+=1;
            }else{
                nums3[k]=nums2[j];
                j+=1;
            }
            k+=1;
        }
        while(i<n1){
            nums3[k]=nums1[i];
            i+=1;
            k+=1;
        }
        while(j<n2){
            nums3[k]=nums2[j];
            j+=1;
            k+=1;
        }
        int n3=nums3.length;
        double median;
        if(n3%2==1){
            median=nums3[n3/2];
        }else{
            int median_right=n3/2;
            int median_left=median_right-1;
            median=(nums3[median_left]+nums3[median_right])/2.0;
        }
        return median;        
    }
}
