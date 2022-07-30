import tkinter
from tkinter import *

win = Tk()
Scrollbar = Scrollbar(win)
Scrollbar.pack(side=RIGHT, fill=Y)

list = Listbox(win,yscrollcommand=Scrollbar.set)

for line in range(101):
    list.insert(END, 'This is line no is' + str(line))

list.pack(side=LEFT, fill=BOTH)    






s = Scale(win)
s.pack()


sb = Spinbox(win, from_=0, to=10)
sb.pack()

win.mainloop()