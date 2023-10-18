/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var n=nums.length
    var count=0
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i<j && nums[i]==nums[j]){
                count++
            }
        }
    }
    return count    
};