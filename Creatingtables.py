"""
Creation of Multiplication Table using while loop
"""
n = int(input("Enter any integer value:"))
print("Table for :",n)
for i in range(1,11):
    print(n,"*",i,":",n*i)