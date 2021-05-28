
# """
# Write a Python function that accepts 
# a string and calculates number of upper case 
# letters and lower case letters available in 
# that string.
# """
# def FUN(STR):
#     print("String is:",STR)
#     n1 = 0
#     n2 = 0
#     for i in STR:
#         if i.islower():
#             n1 = n1+1
#         elif i.isupper():
#             n2 = n2+1
#     print("Lower case alphabets:",n1)
#     print("Upper case alphabets:",n2)
# FUN("Let us Learn Programming")

# S = "C CPP Java VB Python nodeJS"
# print(S.split())
# S1 = "sukhvir"
# print(S1.capitalize())

A = {"1":"Alpha","2":"Beta","3":"Gamma"}
print("A:",A)
print("Element with key 1:",A.get("2"))
for i in A:
    print(i,":",str(A[i]))
A.pop("1")
print("A:",A)
 

