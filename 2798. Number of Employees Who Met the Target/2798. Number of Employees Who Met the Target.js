/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    var n=hours.length
    var count=0
    for(let i=0; i<n;i++){
        if(hours[i]>=target){
            count++
        }
    }
    return count    
};