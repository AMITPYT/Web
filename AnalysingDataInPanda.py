import numpy as np
import pandas as pd

p = {'item':['apple','papaya','orenge','apple','gun','gun'], 'days':['mon','tue','wed','fri','sat','san'], 'sale':[100,80,50,40,30,10]}
df = pd.DataFrame(p)
x = df.groupby('item')
y = x.describe().transpose()   # Some No of function perform in this line like Sum,count,max,min,mean,std,describe,describe().tanspose() 
print(y)   


#  
#  Does not run