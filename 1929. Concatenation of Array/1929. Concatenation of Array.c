/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getConcatenation(int* nums, int numsSize, int* returnSize) {
        int newLength=numsSize*2;
        int* ans=(int*) malloc(newLength* sizeof(int));
        if(ans==NULL){
                return NULL;
        }
        for(int i=0; i<numsSize;i++){
                ans[i]=nums[i];
                ans[i+numsSize]=nums[i];
        }
        *returnSize=newLength;
        return ans;    
}
