# Lambda using progarm
# simple  first program

# x = int(input("enter the value : "))
# c = x+110
# print(c)



# using lambda funtion

# x = lambda x : x+10
# print(x(10))



# Create the program using lambda function
# def myfunc(n):
#       return lambda a : a + n

# variable1  = myfunc(int(input("enter the first variable : ")))
# variable2 = myfunc(3)

# print("first variable : ",variable1(11))
# print("second variable : ",variable2(11))



# prgram to create the lambda function
def fun(m):
     return lambda a : a+m
m1 = fun(int(input("enter the first variable : ")))
m2 = fun(int(input("enter the second variable : ")))
print("first value : ",m1(6))
print("second value : ",m2(5))


 
