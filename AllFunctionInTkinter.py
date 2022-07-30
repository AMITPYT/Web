import tkinter
from tkinter import *
from tkinter import messagebox
# win = Tk()
# frame = Frame(win)
# frame.pack()

# frame2 = Tk()
# frame2 = Frame()
# frame2.pack()

# bb = Button(frame, text='Blue', fg='blue')
# bb.pack(side=LEFT)
# sb = Button(frame, text='Skyblue', fg='skyblue')
# sb.pack(side=LEFT)
# rb = Button(frame, text='Red', fg='red')
# rb.pack(side=LEFT)
# gb = Button(frame2, text='Green', fg='green')
# gb.pack(side=BOTTOM)

# win.mainloop()


# win = Tk()
# lb = Listbox(win)
# lb.insert(1,'Python')
# lb.insert(2,'C')
# lb.insert(3,'Java')
# lb.insert(4,'C++')
# lb.pack()




# win.mainloop()


# win = Tk()
# win.title('first')
# top = Toplevel()
# win.title('second')
# top = Toplevel()

# win.mainloop()


win = Tk()

def hello():
    messagebox.showinfo('From Computer','hey there')
b = Button(win,text='popup',command=hello)
b.pack()    
win.mainloop()