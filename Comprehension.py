#  Comprehensions

# LS = []
# for i in range(100):
#     if i%3==0:
#         LS.append(i)
# print(LS)        


LS =[i for i in range(100) if i % 3==0]
print(dir(LS))