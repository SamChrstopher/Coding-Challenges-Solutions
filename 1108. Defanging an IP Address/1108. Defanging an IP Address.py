class Solution:
    def defangIPaddr(self, address: str) -> str:
        for i in range(len(address)):
            result=address.replace(".","[.]")
        return result
