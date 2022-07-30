import matplotlib.pyplot as plt
import pandas as pd 
import numpy as np

x = np.linspace(0,10,20)
y = x * x
z = x + y
plt.plot(x,y,x,x,x,z)
plt.xlabel("x axis")
plt.ylabel("y axis")
plt.title("GRAP")
plt.show()


