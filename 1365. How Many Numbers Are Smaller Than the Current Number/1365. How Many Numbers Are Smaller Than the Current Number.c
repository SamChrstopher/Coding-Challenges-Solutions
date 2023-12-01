/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* smallerNumbersThanCurrent(int* nums, int numsSize, int* returnSize) {
    int* result = (int*) malloc(numsSize* sizeof(int));
    int count;
    for(int i=0; i<numsSize; i++){
        count=0;
        for(int j=0; j<numsSize; j++){
            if(i!=j && nums[i]>nums[j]){
                count++;
            }
        }
        result[i]=count;
    }
    *returnSize = numsSize;
    return result;    
}
