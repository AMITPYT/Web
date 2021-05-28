# Harry Potter has got the “n” number of apples. Harry has some students among whom he wants to distribute the apples.
# These “n” number of apples is provided to harry by his friends, and he can request for few more or few less apples.
# You need to print whether a number is in range mn to mx, is a divisor of “n” or not.

n = int(input("Enter how many apple you want to give the haary porter:"))
print(f"Harry poorter has {n} apple")

mx  = int(input("Enter the maximum number :"))
print("maximum number is ",mx)
mn = int(input("Enter the minimum number :"))
print("minimum number is ",mn)
for i in range(mn,mx+1):
    if n%i == 0:
        print(f"{i} is divisor by {n}")
    else:
        print(f"{i}is not divisor by {n}")    