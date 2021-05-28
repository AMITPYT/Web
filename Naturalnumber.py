"""
Compute sum of 
natural numbers from one to n number.
"""
n = int (input("Enter n(positive integer value):"))
if n > 0:
    SUM = 0
    for i in range(1,n+1):
        SUM = SUM + i
        print("Sum of",i,"No/No.s:",SUM)
elif n==0:
    print("Sum = 0")
else:
    print("Please enter +ve integer value")