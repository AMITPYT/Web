"""
    Program Number 5:
        Print numbers up to N 
        which are not divisible by 3, 6, 9,, 
        e.g., 1, 2, 4, 5, 7,….
"""
N = int(input("Enter any integer value : "))
print("List of numbers from 1 to ",N)
print("not divisible by 3,6,9,...is :")
for i in range(1,N+1):
    if i%3!=0:
        print(i,end=' ')