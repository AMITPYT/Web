
x = int(input("enter the first value : "))
y = int(input("enter the second value : "))
z = int(input("enter the third value : "))
n = int(input("enter the N value : "))
amit = []
for i in range(x+1):
   for j in range(y+1):
        for k in range(z+1):
            if (i+j+k)!= n:
                amit.append([i,j,k])
print(amit)
