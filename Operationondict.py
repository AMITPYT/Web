"""Perform following operations on dictionary
1) Insert 2) delete 3) change"""

A = {}
print("A:",type(A))
A = {'1':"ABC",'2':"DEF"}
print("Dict1",A)
# insertion
A['3'] = "AMIT"
print("Dict :",A)
# Changing the element in the dict
A['1'] = "POOJA"
print("Dict :",A)
# Remove the element 
A.pop('2')
print("Dict :",A)
# Clear the element
A.clear()
print("Dict :",A)

