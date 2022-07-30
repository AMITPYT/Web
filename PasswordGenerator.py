import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
number = "012345678"
symbol = "[]{}()*;/,._-"


all = lower+upper+number+symbol
length = 16
password = "".join(random.sample(all,length))
print(password)
