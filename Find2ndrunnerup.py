"""
Given the participants' score sheet for your University Sports Day, you are required to find the runner-up score. You are given n scores.
Store them in a list and find the score of the runner-up
 """
import numpy 
List = []
n = int(input("Enter the values you want to insert: "))
print(f"You entered {n}")
for i in range(0,n):
    i = int(input(" "))
    arr = numpy.array(List) 
    List.append(i)
print("List is:",List)
print("Max value of List is ",max(List))
List = sorted(List)
print("Sorted  List is ",List)
print("Second runner up is:",List[-2])       
arr = numpy.array(List)
print("After converting list into array:",arr)