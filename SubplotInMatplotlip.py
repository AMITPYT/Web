import matplotlib.pyplot as plt
import numpy as np
import pandas as pd 

x = np.linspace(0,10,20)
y = x * x
z = x + y
plt.subplot(3,2,5)
plt.plot(x,y)
plt.xlabel("x axis")
plt.ylabel("y axis")
plt.subplot(3,1,2)
plt.plot(x,x)
plt.xlabel("x axis")
plt.ylabel("y axis")
plt.subplot(3,2,3)
plt.plot(x,z)
plt.xlabel("x axis")
plt.ylabel("y axis")
plt.subplot(3,3,4)
plt.plot(z,y)
plt.xlabel("x axis")
plt.ylabel("y axis")

plt.tight_layout()
plt.show()