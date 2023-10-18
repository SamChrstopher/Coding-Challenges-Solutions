/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    var n=sentences.length
    var max=0
    for(let i=0;i<n;i++){
        var words=sentences[i].split(" ")
        var count=words.length
        if(count>max){
            max=count
        }
    }
    return max    
};