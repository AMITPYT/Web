"""
Print Fibonacci series up to n numbers 
    e.g. 0 1 1 2 3 5 8 13…..n
"""
a = int(input("Enter first number of fib series: "))
b = int(input("Enter second number of fib series: "))
n = int(input("Count:"))
print(a,b,end=' ')
for i in range(1,n-1):
    c = a+b
    print(c,end=' ')
    a = b
    b = c



