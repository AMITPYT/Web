"""
LAB NUMBER 25:
    Perform sequential search on ordered list 
    of given numbers.
"""
def FUN(LIST,key):
    for i in range(len(LIST)):
        if LIST[i]==key:
            return i
            break
    return 1
n = int(input("Enter how many elements u want to display:"))
if n > 1:
    print("Data is appropriate")
    print("Enter",n,"elements:")
    LIST = []
    for i in range(n):
        LIST.append(input())
    print("LIST:",LIST)
else:
    print("Kindly re-enter the value of n")
SL = list(map(int,LIST))
print("Now the LIST is:",SL)  
SL.sort()
print("Sorted LIST is:",SL)  

key = int(input("The number you want to search:"))
n = FUN(SL,key)


if n!=-1:
    print(key,"is found at position",n+1)
else:
    print("DATA is not present in the LIST")
