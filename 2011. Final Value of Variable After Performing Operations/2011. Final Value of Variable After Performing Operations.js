/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var X=0
    var n=operations.length
    for(let i=0; i<n;i++){
        if(operations[i] == "X++" || operations[i] == "++X"){
            X++;
        }
        else{
            X--;
        }
    }
    return X    
};