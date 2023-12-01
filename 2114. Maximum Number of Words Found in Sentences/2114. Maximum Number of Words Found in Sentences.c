int mostWordsFound(char** sentences, int sentencesSize) {
    int max=0;
    int count;
    for(int i=0; i<sentencesSize; i++){
        count = wordCount(sentences[i]);
        if(count>max){
            max=count;
        }
    }
    return max;    
}
int wordCount(char* sentences){
    int count=0;
    for(int j=0; sentences[j]!= '\0'; j++){
        if(sentences[j]==' '){
            count++;
        }
    }
    return count+1;
}
