"""
Program Number 6
BCA 3rd Semester
Write a program to determine 
whether a triangle is isosceles or not?
"""
"""
ISOSCELES TRIANGLE
-- Length of any two sides is equal
-- then the triangle is isosceles
"""
a = int(input("Enter the length of 1st Side :"))
b = int(input("Enter the length of 2nd Side :"))
c = int(input("Enter the length of 3rd Side :"))
if a==b==c:
    print("Triangle is isosceles(All the 3 sides are equal)")
elif a==b!=c:
    print("Triangle is isosceles(first and second side are equal)")
elif a==c!=b:
    print("Triangle is isosceles(first and third side are equal)")
elif b==c!=a:
    print("Triangle is isosceles(second and third side are equal)")
else:
    print("Triangle is not isosceles")