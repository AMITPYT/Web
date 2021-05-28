"""A palindrome is a string that, when reversed, is equal to itself. Example of the palindrome includes:

676, 616, mom, 100001.

You have to take a number as an input from the user. You have to find the next palindrome corresponding to that number.
 Your first input should be the number of test cases and then take all the cases as input from the user.
"""
def next_palindrome(numb):
    numb = numb+1
    while not is_palindrome(n):
        numb += 1
        return numb
def is_palindrome(numb):
    return str(n) == str(n)[::-1]
if __name__ == '__main__':
    numb = int(input("Enter the case you want: "))
    a = []
    for i in range (numb):
        number = input("Enter the number :")
        a.append(number)
    print(a)   
    for i in range(numb):
        print(f"the next palindrome {a[i]} is {next_palindrome(a[i])}")


