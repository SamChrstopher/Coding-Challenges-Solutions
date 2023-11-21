int finalValueAfterOperations(char** operations, int operationsSize) {
    int count=0;
    for(int i=0; i<operationsSize; i++){
        if(strcmp(operations[i], "X++")==0 || strcmp(operations[i], "++X")==0){
            count+=1;
        }else{
            count-=1;
        }        
    }
    return count;    
}
