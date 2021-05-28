"""
Perform following operations on two matrices.
1) Addition 2) Subtraction 3) Multiplication
"""

A = int(input("Enter the no of rows of 1st matrix :"))
B = int(input("Enter the no of col of 1st matrix :"))
C = []
print("1st matrix")
for i in range(A):
    D = []
    for j in range(B):
        D.append(int(input()))
        C.append(D)
print("1st matrix ")
for i in range(A):
    for j in range(B):
        print(C[i][j],end=" ")
    print()
    
A1 = int(input("Enter the no of rows of 2nd matrix :"))
B1 = int(input("Enter the no of col of 2nd matrix :"))
C1 = []
print("2nd matrix")
for i1 in range(A1):
    D1 = []
    for j1 in range(B1):
        D1.append(int(input()))
        C1.append(D1)
print("2nd matrix ")
for i1 in range(A1):
    for j1 in range(B1):
        print(C1[i1][j1],end=" ")
    print()


C3 = [[0,0],[0,0]]
if A == B1:
    print("matriculation of matrix is possible")
    for i in range(A):
        for j in range(B1):
            for k in range(B):
                C3[i][j] += C[i][k] * C1[k][j]
    for c in C3:
        print(c)
else:
    print("matriculation is not possible")      



        

