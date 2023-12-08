/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var i=0;
    var j=0;
    var nums3=[];
    while (i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            nums3.push(nums1[i]);
            i+=1;
        }else{
            nums3.push(nums2[j]);
            j+=1;
        }
    }
    while (i<nums1.length){
        nums3.push(nums1[i]);
        i+=1;
    }
    while (j<nums2.length){
        nums3.push(nums2[j]);
        j+=1;
    }
    n=nums3.length;
    if (n%2==1){
        var median=nums3[Math.floor(n/2)];
    }else{
        var median_right=n/2;
        var median_left=median_right-1;
        var median=(nums3[median_left]+nums3[median_right])/2;
    }
    return median;    
};
