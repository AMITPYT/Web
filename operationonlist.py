"""Perform following operations on a list of numbers:
1) Insert an element 2) delete an element 
3) sort the list     4) delete entire list
"""


n = int(input("How many element would you insert in the list :"))
if n>0:
    print("Data is correct ")
    print("Enter",n,"element")
    LIST = []
    for i in range(n):
        LIST.append(input("enter the element:"))
    print("LIST is:",LIST)
    a = int(input("Enter the element where u insert :"))
    a = int(a)
    b = int(input("Enter the element where u index the element :"))
    LIST.insert(b,a)
    print("NEW LIST is here",LIST)
    c = int(input("Enter the element u want to delete :"))
    LIST.remove(c)
    print("NEW LIST is here",LIST)
    SL = list(map(int,LIST))
    SL.sort()
    print("SORTED LIST is here",SL)
    SL.clear()
    print("after the all element was deleted")
    print("NEW LIST",SL)
else:
    print("plzzz enter the correct data")    


