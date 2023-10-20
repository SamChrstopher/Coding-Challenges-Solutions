/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var n=s.length
    var max=0
    var balance=0
    for(let i=0; i<n; i++){
        if(s[i]==="R"){
            balance++
        }
        else if(s[i]==="L"){
            balance--
        }
        if(balance==0){
            max++
        }
    }
    return max
    
};