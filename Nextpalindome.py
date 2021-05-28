print("Welcome to the next palindrome program!")
a=int(input("Please enter number of test cases. \n"))
for i in range(a):
    item=int(input("Enter a number\n"))
    org = item
    while 1:
        item=int(item)
        item = item + 1
        item=str(item)
        if item==item[::-1]:
            print(f"The next palindrome of {org} is {item}")
            break

# def ispalindrome(a):
#     return a == a[::-1]
# a = "anna"
# s = ispalindrome(a)
# if s :
#     print("Yes")
# else:
#     print("No")    