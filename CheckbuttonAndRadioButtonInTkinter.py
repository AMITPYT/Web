# Check Button

import  tkinter
from tkinter import *
win = Tk()
c1 = IntVar()
c2 = IntVar()
win.geometry('500x400')

cb1 = Checkbutton(win,text='Music', offvalue=0, onvalue=1, height=3, width=6, variable=c1)
cb1.pack()
cb2 = Checkbutton(win,text='Video', offvalue=0, onvalue=1, height=3, width=6, variable=c2)
cb2.pack()





# Radio Button
var = IntVar
r1 = Radiobutton(win, text='Male', variable='var', value=1, height=3, width=6)
r1.pack()
r1 = Radiobutton(win, text='Female', variable='var', value=2, height=3, width=6)
r1.pack()
r1 = Radiobutton(win, text='Other', variable='var', value=3, height=3, width=6)
r1.pack()

win.mainloop()


