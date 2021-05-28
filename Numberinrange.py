"""
Check whether a number is in a 
given range using functions.
"""

def fun(st,end,key):
    A = set()
    for i in range(st,end+1):
        A.add(i)
        print("Set A :",A)
    if key in A:
        print(key,"  in the set")
    else:
        print(key,"  not in the set")  
a = int(input("Enter the starting point :"))
b = int(input("Enter the end point :"))
n = int(input("Enter the element you want to search in set A:"))          
fun(a,b,n)
