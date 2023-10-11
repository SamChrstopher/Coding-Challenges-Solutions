class Solution:
    def interpret(self, command: str) -> str:
        result=command.replace("G","G").replace("()","o").replace("(al)","al")
        return result
