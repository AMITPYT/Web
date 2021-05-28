#  Else & Finally In Try

f1 = open("amit.txt")
try:
    f = open("amit1.txt")
except Exception as e:
    print(e)
else:
    print("This will be run after the except is not running")    
finally:
    print("Run this anyway ....")
    f1.close()

print("important thinks")