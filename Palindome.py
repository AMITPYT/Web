STR = str(input("Enter the string :"))
print("enter string is :",STR)
Reverse = STR[::-1]
print("Reverse order:",STR)
if STR == Reverse:
    print("This is a parlidome string :")
else:
    print("This is not a parlidome string :")    