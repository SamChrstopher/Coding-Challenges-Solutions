/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var n=address.length
    var result=""
    for(let i=0; i<n; i++){
        if(address[i]==="."){
            result=result.concat("[.]")
        }
        else{
            result=result.concat(address[i])
        }
    }
    return result
};