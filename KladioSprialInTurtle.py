import turtle as t
import time as ti
from itertools import cycle

colors = cycle(['lightblue','lightgreen','lightyellow','grey','white','lightpink','brown','purple'])

def circle(size,angle,forw):
    t.pencolor(next(colors))
    t.circle(size)
    t.right(angle)
    t.forward(forw)
    circle(size+5,angle+1,forw+5)

t.bgcolor('black')
t.speed('fast')
t.pensize(2)
circle(35,0,15)
ti.sleep(2)
t.hideturtle()    


