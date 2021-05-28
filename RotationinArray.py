# Left Rotation in the array 

# array = [1,2,3,4,5,6,7]
# front = [4,5,6,7]
# back = [1,2,3]
# a1 = front + back 
# print(a1)

arr = [1,2,3,4,5]
n = 1
for i in range(0,len(arr)):
    print(arr[i],end=" ")    
    for j in range(n):
        #Stores the first element of the array  
        first = arr[0]
        
    for k in range(0, len(arr)-1): 
        #Shift element of array by one  
        arr[k] = arr[k+1]
    #First element of array will be added to the end  
    arr[len(arr)-1] = first
    
print()
#Displays resulting array after rotation   
print("Array after left rotation: ")
for i in range(0,len(arr)):
    print(arr[i],end=" ")