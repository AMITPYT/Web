
i = int(input("Enter the value = "))
if(i<1) :
    print("enter positive no")
elif(i>100):
    print("enter 100 or less")
else:
    if(i % 2) != 0:    
        print("Weird")
    elif(i % 2) == 0:
        print("Not Weird")
    elif i in range(2,5):
        print("Not Weird")
    elif i in range(6,20):
        print("Weird")    
    else:
        if(i % 2) == 0 or (i > 20):
            print("Not Weird")
        else:
            print(  )    
