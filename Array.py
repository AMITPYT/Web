
# array = []
# n = int(input("Enter the value you want you insert :"))
# for i in range(n):
#     i =  int(input(" "))
#     array.append(i)
#     print(array)   
# array.reverse()
# print(array)


# array = list(map(int,input("Enter ").split()))
# print(array)


# n = int(input(" "))
# array = list(map(int,input().rstrip().split()))
# for i in range(len(array)-1,-1,-1):
#     print(array[i],end=" ")


# rstrip = Remove the right spaces of the string 
# example = "banana    " remove the right spaces 

# split = Break the sring into pieces
# example = " how are you" a string 
# after split ['how','are','you'] they split the string


import array as arr 
input = [[3,4,5,6,3,2],[6,5,4,3,2,1]]
print(input)
input.insert(1,[1,2,3,4,5,6])
print("After inserting")
for i in input:
    for j in i:
        print(j,end=" ")
    print(" ")    

# array = []
# array = [10,20,30,40]
# ans = sum(array)
# print(ans)
