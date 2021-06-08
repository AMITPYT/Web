from numpy.core.fromnumeric import product
import pandas as pd 

A = [1,2,3,4,5]
B = [6,7,8,9,0]
C = [5,4,3,2,1]
D = [0,9,8,7,6]
E = [4,5,6,7,8]
df = pd.DataFrame([A,B,C,D,E],['a','b','c','d','e'],['v','w','x','y','z'])
df['M'] = df['x'] + df['z']
# fd = df.drop('e',inplace = True) 
# print(df.drop('z',axis=1 , inplace = True))   # Deleting the one particular row 
# print(df.loc['a','y'])  # Acessing the element in the data

print(df > 4)