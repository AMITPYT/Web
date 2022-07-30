from tkinter import *
from tkinter import messagebox

win = Tk()

def submit():
    messagebox.askquestion('Form',
                           'Do you want to submit')

win.geometry('100x100')

button = Button(win,text='submit', command=submit)

button.pack()

win.mainloop()


