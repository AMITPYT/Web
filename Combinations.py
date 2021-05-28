
# Print all possible combination of 4,5,7
a = int(input("enter the first value = "))
b = int(input("enter the 2nd value = "))
c = int(input("enter the 3rd value = "))
d=[ ]
d.append(a)
d.append(b)
d.append(c)
for i in range(0,3):
    for j in range(0,3):
        for k in range(0,3):
            if(i!=j & j!=k & k!=i):
                print(d[i],d[j],d[k])



# same as 
 
a = int(input("enter the first value = "))
b = int(input("enter the 2nd value = "))
c = int(input("enter the 3rd value = "))
d = int(input("enter the fourth value = "))
e = int(input("enter the fiveth value = "))
f = [ ]
f.append(a)
f.append(b)
f.append(c)
f.append(d)
f.append(e)
for i in range(0,3):
    for j in range(0,3):
        for k in range(0,3):
            for l in range(0,3):
                for m in range(0,3):
                    if(i!=j & j!=k & k!=l & l!=m & m!=i):
                        print(f[i],f[j],f[k],f[l],f[m]) 




# same as again but some changes


a = chr(int(input("enter the first value = ")))
b = chr(int(input("enter the 2nd value = ")))
c = chr(int(input("enter the 3rd value = ")))
d=[ ]
d.append(a)
d.append(b)
d.append(c)
for i in range(0,3):
    for j in range(0,3):
        for k in range(0,3):
            if(i!=j & j!=k & k!=i):
                print(d[i],d[j],d[k])




# once again same str useing in this program

a = str(int(input("enter the first value = ")))
b = str(int(input("enter the 2nd value = ")))
c = str(int(input("enter the 3rd value = ")))
d=[ ]
d.append(a)
d.append(b)
d.append(c)
for i in range(0,3):
    for j in range(0,3):
        for k in range(0,3):
            if(i!=j & j!=k & k!=i):
                print(d[i],d[j],d[k])