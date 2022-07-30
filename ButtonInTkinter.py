import tkinter
from tkinter import *

win = Tk()
win.geometry("600x500")
b = Button(win,text="For you")
# b.pack()
b.grid(row=2,column=3)
# b.place(x=200,y=300)
b2 = Button(win,text="Thank you")
# b2.pack()
# b2.grid(row=1,column=4)
b2.place(x=300,y=400)

win.mainloop()



# import tkinter
# from tkinter import *

# def pr():
#     print('hello')
# win = Tk()
# win.geometry("600x500")
# b = Button(win,text="For you" , command=pr ,padx=20, pady=30 , activebackground='lightblue')
# b.place(x=275,y=225)


# win.mainloop()