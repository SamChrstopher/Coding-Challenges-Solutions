/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var n=stones.length
    var count=0
    for(let i=0; i<n; i++){
        if(jewels.includes(stones[i])){
            count++
        }
    }
    return count
    
};