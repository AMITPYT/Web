# import matplotlib.pyplot as plt
# import pandas as pd 
# import numpy as np

# x = np.linspace(0,10,20)
# y = x * x
# z = x + y
# plt.plot(x,y, label = 'first example')
# plt.legend(loc = 2)
# plt.show()



# object Oriented plots

import matplotlib.pyplot as plt
import pandas as pd 
import numpy as np

x = np.linspace(0,10,20)
y = x * x
z = x + y
plt.plot(x,y)
fig = plt.figure()
axes = fig.add_axes(0,1,1,1)
axes.plot(x,y)
plt.show()