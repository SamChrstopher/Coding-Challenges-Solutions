class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        maxx=0        
        for i in range(len(sentences)):
            count=0
            for j in sentences[i].split():
                count+=1
            if count>maxx:
                maxx=count
        return maxx
