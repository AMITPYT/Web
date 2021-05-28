"""
factorial
"""
fact = 1
n = int(input("Enter n:"))
if n>0:
    for i in range(1,n+1):
        fact = fact * i
    print("Factorial of",n,"is:",fact)
elif n==0:
    print("Fact of 0:1")
else:
    print("Fact of -ve is not possible")