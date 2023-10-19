/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    var n=command.length
    var result=""
    for(let i=0; i<n; i++){
        if(command[i]==="G"){
            result+="G"
        }
        else if(command[i]==="("){
            if(command[i+1]===")"){
                result+="o"
            }
        }
        else if(command[i]==="a"){
            continue
        }
        else if(command[i]==="l" && command[i+1]===")"){
            result+="al"
        }
    }
    return result    
};