# create the file in write mode add 

# f = open("amit.txt","a")
# a = f.write("asdfghhjk")
# print(a)
# f.close()




# writting mode
# f = open("amit.txt","w")
# f.write("asdfghhjk")
# f.close()




# reading and writting mode both
f = open("amit.txt","r+")
print(f.read())
f.write("thank you")
f.close()