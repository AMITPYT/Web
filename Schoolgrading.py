"""A school has following rules for grading system:
a. Below 25 - F
b. 25 to 45 - E
c. 45 to 50 - D
d. 50 to 60 - C
e. 60 to 80 - B
f. Above 80 - A
Ask user to enter marks and print the corresponding grade.
"""
print("enter the marks you earend")
a=int(input(  ))
if a<25:
    print("fail grade F")
elif a<45:
    print("pass grade E")
elif a<50:
    print("pass grade D")
elif a<60:
    print("pass grade C")
elif a<80:
    print("pass grade B")
elif a>80:
    print("execllent job")
else:
    print("enter the valid value")                        