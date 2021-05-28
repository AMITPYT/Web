
# array  in python   
# import array as ar
# a = ar.array('i',[1,3,5,6,7,9])
# print(a)


# import array as ar
# a = ar.array('i',[5,3,5,7,6,8,7])
# print("first element",a[2])
# print("second element",a[3])
# print("third element",a[1])
# print("fourth element",a[-6])



# slicing
# import array as ar
# list = [1,2,6,8,7,6]
# number = ar.array('i', list)
# print("first element",number[2:5])
# print("second element",number[1:3])
# print("third element",number[: :-1])


#adding the new element and also changing

# import array as ar
# a = ar.array('i',[1,2,3,7,8,9,10])
# a[0] = 0
# print(a)
# a[3:5] = ar.array('i',[4,5,6,7,8])  # pending
# print(a)

#   append the new value delete the value 

import array as ar 
a = ar.array('i',[1,2,3,4,5,6])
a.append(4)
print(a)
a.extend([7,8,9])
print(a)

