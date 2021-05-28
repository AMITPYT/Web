"""
Count occurrence of vowels.
"""
STR = str(input("Entre the value : "))
STR = STR.lower()
C = {}
Sreach = "aeiou"
for i in Sreach:
    n = STR.count(i)
    C[i] = n
print(C)    
m = C.values()
TV = sum(m)
print("TOtal vowels :",TV)

