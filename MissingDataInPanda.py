import pandas as pd
import numpy as np

d = {'a':[1,2,3,4,5],'b':[6,7,8,9,np.nan],'c':[5,4,3,np.nan,np.nan],'d':[9,8,np.nan,np.nan,np.nan],'e':[9,np.nan,np.nan,np.nan,np.nan]}
df = pd.DataFrame(d)

# print(df.dropna(axis=0))
# print(df.dropna(thresh=1))
print(df['c'].fillna(value= df['c'].mean()))