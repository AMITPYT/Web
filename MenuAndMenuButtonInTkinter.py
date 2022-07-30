import tkinter
from tkinter import *


# win = Tk()
# mb = Menubutton(win, text='file')
# mb.grid()
# mb.menu = Menu()
# mb['menu'] = mb.menu

# x1 = IntVar()
# x2 = IntVar()

# mb.menu.add_checkbutton(label='open', variable=x1)
# mb.menu.add_checkbutton(label='close', variable=x2)

# win.mainloop()



win = Tk()

def nothing():
    file = Toplevel(win)
    button = Button(file, text='do nothing')
    button.pack()

menubar = Menu(win)

filemenu = Menu(menubar)

filemenu.add_command(label=' New Window', command=nothing)
filemenu.add_command(label='New File', command=nothing)
filemenu.add_command(label='Open', command=nothing)
filemenu.add_command(label='Close', command=nothing)
filemenu.add_separator()
filemenu.add_command(label='Save', command=nothing)
filemenu.add_command(label='Save as', command=nothing)
filemenu.add_separator()
filemenu.add_command(label='Auto Save', command=nothing)
filemenu.add_command(label='Close File', command=nothing)
filemenu.add_command(label='Close Window', command=nothing)
filemenu.add_separator()
filemenu.add_command(label='Exit', command=win.quit)

filemenu.add_cascade(label='file', menu=filemenu)
editmenu = Menu(menubar)
filemenu = Menu(menubar)

filemenu.add_command(label='undo', command=nothing)
filemenu.add_command(label='redo', command=nothing)
filemenu.add_separator()
filemenu.add_command(label='Cut', command=nothing)
filemenu.add_command(label='Copy', command=nothing)
filemenu.add_command(label='Paste', command=nothing)
filemenu.add_command(label='Select All', command=nothing)
filemenu.add_separator()
filemenu.add_command(label='Exit', command=win.quit)

filemenu.add_cascade(label='Edit', menu=editmenu)



win.config(menu = menubar)

win.mainloop()