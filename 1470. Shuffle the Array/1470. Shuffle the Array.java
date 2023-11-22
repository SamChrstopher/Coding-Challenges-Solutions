class Solution {
    public int[] shuffle(int[] nums, int n) {
        int len=nums.length;
        int mid=len/2;
        int result[] = new int[len];
        for(int i=0; i<mid; i++){
            result[2*i]=nums[i];
            result[2*i+1]=nums[mid+i];
        }
        return result;
    }
}
