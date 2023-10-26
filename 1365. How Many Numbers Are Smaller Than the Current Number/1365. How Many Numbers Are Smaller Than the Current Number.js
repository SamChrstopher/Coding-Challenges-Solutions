/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var len=nums.length
    var result=[]
    for(let i=0; i<len;i++){
        var count=0
        for(let j=0; j<len; j++){
            if(i!=j && nums[i]>nums[j]){
                count+=1
            }
        }
        result.push(count)
    }
    return result    
};