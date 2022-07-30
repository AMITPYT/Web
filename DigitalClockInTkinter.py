from tkinter import *
from tkinter.ttk import *
from time import strftime
from tkinter import Tk, Canvas, NW, NE, SW, CENTER


win = Tk()
win.title('Clock')

def time():
    string = strftime('%H:%M:%S  %p')
    l1.config(text=string)
    l1.after(1000,time)

l1 = Label(win, font=('calibri', 40, 'bold'),
                       background='black',
                       foreground='red')

l1.pack(anchor = 'center')
time()                       

win.mainloop()


