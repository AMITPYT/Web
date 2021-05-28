"""
Given the names and grades for each student in a class of  students, N store them in a nested list and print the name(s) of any student(s) 
having the second lowest grade.
Note: If there are multiple students with the second lowest grade, order their names alphabetically and print each name on a new line.

"""
List = []
n = int(input("Enter the values you want to insert: "))
print(f"You entered {n}")
for i in range(0,n):
    i = input(" ")
    grade = float(input(""))
    List.append([i,grade])   
print(sorted(List))    
print(List[-2])
if List[grade] < min1:
        min1 = l[grade] #It will change
print(min1)
 

