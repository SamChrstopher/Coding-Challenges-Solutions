/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let n=nums.length
    let result=[]
    for(let i=0;i<n;i++){
        result.push(nums[nums[i]])
    }
    return result    
};