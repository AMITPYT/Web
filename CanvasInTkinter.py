import tkinter
from tkinter import *

win = Tk()

c = Canvas(win, height=250,width=300,bg= 'lightblue')
coord = 10,50,240,210
arc = c.create_arc(coord,start=0,extent=150,fill='blue')



c.pack()
win.mainloop()