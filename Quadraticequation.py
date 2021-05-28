"""
    Program Number 4:
        Compute and print roots of 
        quadratic equation ax2+bx+c=0, 
        where the values of a, b, and c 
        are input by the user.
"""
import math
print("Enter the following data to find")
print("the solution of quadratic equation:")
a = int(input("Enter coeff of x^2 : "))
b = int(input("Enter coeff of x : "))
c = int(input("Enter constant : "))
d = b*b - 4*a*c
print("Discriminant : ",d)
if d == 0:
    print("Roots are real and equal")
    r1 = r2 = (-b)/2*a
    print("First Root : ",round(r1,2))
    print("Second Root : ",round(r2,2))
elif d>0:
    print("Roots are real and unequal")
    r1 = ((-b)+math.sqrt(d))/2*a
    r2 = ((-b)-math.sqrt(d))/2*a
    print("First Root : ",round(r1,2))
    print("Second Root : ",round(r2,2))
else:
    print("Roots are imaginary")