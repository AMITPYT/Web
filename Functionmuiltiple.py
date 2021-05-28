"""
Multiply all the numbers in a list using functions
"""
 
def FUN(LIST):
    key = 1
    print("LIST IS :",LIST)
    for i in LIST:
        key = key*i
        print("Multiply all the numbers",key)
A = [2,4,8,16]
FUN(A)
