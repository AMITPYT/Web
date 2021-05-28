"""
To find the Max of three numbers using functions
"""

n1 = int(input("Enter First Number:"))
n2 = int(input("Second Number:"))
n3 = int(input("Third Number:"))
if n1>n2:
    if n1>n3:
        print(n1,"largest")
    else:
        print(n3,"largest")
else:
    if n1>n2:
        print(n1,"largest")
    else:
        print(n2,"largest")                

