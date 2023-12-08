double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int i=0;
    int j=0;
    int k=0;
    int nums3[nums1Size+nums2Size];

    while(i<nums1Size && j<nums2Size){
        if(nums1[i]<nums2[j]){
            nums3[k]=nums1[i];
            i++;
        }else{
            nums3[k]=nums2[j];
            j++;
        }
        k++;
    }
    while(i<nums1Size){
        nums3[k]=nums1[i];
        i++;
        k++;
    }
    while(j<nums2Size){
        nums3[k]=nums2[j];
        j++;
        k++;
    }
    int n3=k;
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
