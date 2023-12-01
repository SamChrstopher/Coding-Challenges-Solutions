class Solution {
    public int mostWordsFound(String[] sentences) {
        int max=0;
        int count;
        for(int i=0; i<sentences.length; i++){
            String [] words=sentences[i].split(" ");
            count=words.length;
            if(count>max){
                max=count;
            }
        }
        return max;        
    }
}
