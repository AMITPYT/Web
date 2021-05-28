# Take age or year of birth as an input from the user. Store the input in one variable. Your program should detect whether the 
# entered input is age or year of birth and tell the user when they will turn 100 years old. (5 points).

# Here are a few instructions that you must have to follow:

# Do not use any type of modules like DateTime or date utils. (-5 points)
# Users can optionally provide a year, and your program must tell their age in that particular year. (3points)
# Your code should handle all sort of errors like:                       (2 points)

Ageyear = int(input("Enter your age and DOB :"))
yearage = 0
if Ageyear>120:
    print("You are the oldest person alive this earth")
elif Ageyear<120:
    Ageyear = 2020 - Ageyear
    Ageyear = 100 + Ageyear
    print("your age will be hundred in that year",Ageyear)
else:
    print(" ")       
if yearage>1900:
    print("There was a some problem with your age or DOB")
if yearage<1900:
    yearage = 2019 - yearage
    Ageyear = Ageyear - yearage
    print("You are hundred year old ",Ageyear)

                     