# # sEnumerate function
# l1 = ["aloo" , "chowmin" , "burger" , "samosa"]
# i = 1
# for item in l1:
#     if i%3!=0:
#         print(f"this for you {item}")
#     i = i+1


# for index,item in enumerate(l1):
#     if index%2==0:
#         print(f"healthy food for me {item}")    



# # *************MAP**************

# def sq(a):
#     return a*a

# def cube(a):
#     return a*a*a

fun = [sq,cube]
for i in range(10):
    bale = list(map(lambda x : x(i),fun))
    print(bale)   

#*****************FILTER***************



# L = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
# def greater_then_5(num):
#     return num>5
# g_than_5 = list(filter(is_greater_5 , L))
# print(g_then_5)