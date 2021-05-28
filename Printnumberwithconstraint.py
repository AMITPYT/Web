"""
The included code stub will read an integer, , from STDIN.
Without using any string methods, try to print the following:
1234....n


"""

n = int(input("enter the value : "))
for i in range(1,n):
    if i <= n < 150:
        print(i,end="")
    else:
        print("correct value")    
        break    