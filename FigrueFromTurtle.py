import turtle as t 

for i in range(1,5):
    t.forward(200)
    t.right(90)

t.penup
t.goto(0,0)
t.pendown
t.color('blue')    
 
# For the circle 
for i in range(1,101):
    t.circle(i)
    t.speed(100)
   
t.goto(-5, -5)
t.color('red')


for i in range (1,91):
    t.circle(i)
    t.speed(100)

#  For the 3d circle
t.goto(150,100)
for i in range (1,10):
    t.circle(i+90)
    t.left(10)
    
t.goto(-100,150)
for i in range(1,10):
    t.forward(150)
    t.left(135)    