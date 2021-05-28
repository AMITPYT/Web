n = list(input("enter the  list : "))
print(n)
  

n = int(input("enter the first value : "))
sum = 0
for i in range(n):
    sum = sum + i
print("sum of total",sum)
print("Average  ",sum/2)
print("max value ",max([sum]) )
print("min value ",min([sum]))

