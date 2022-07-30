import tkinter
from tkinter import *
from functools import partial

win = Tk()
win.geometry('600x500')


def sum(label,x1,x2):
    n1 = (x1.get())
    n2 = (x2.get())
    sum = int(n1) + int(n2)
    label.config(text='sum is : %d' %sum)
    return


l1 = Label(win, text='First No')
l1.grid(row=1, column=0)
l1.place(x=210,y=162)
l2 = Label(win, text='Second No')
l2.grid(row=2, column=0)
l2.place(x=210,y=190)
label = Label(win)
label.grid(row=6, column=2)

x1 = StringVar()
x2 = StringVar()


e1 = Entry(win,textvariable=x1)
e1.grid(row=1, column=2)
e1.place(x=280,y=191)
e2 = Entry(win,textvariable=x2)
e2.grid(row=2, column=2)
e2.place(x=280,y=160)
sum = partial(sum,label,x1,x2)
button = Button(win,text='Calculate', command=sum, activebackground='blue')
button.grid(row=3, column=0)
button.place(x=208,y=220)

win.mainloop()