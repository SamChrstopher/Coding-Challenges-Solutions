/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* shuffle(int* nums, int numsSize, int n, int* returnSize){
    int* result=(int*) malloc(numsSize* sizeof(int));
    int mid=numsSize/2;
    for(int i=0; i<mid;i++){
            result[2*i]=nums[i];
            result[2*i+1]=nums[mid+i];        
    }
    *returnSize=numsSize;
    return result;
}
