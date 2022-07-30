def create_stack():
    stack = []
    return stack

def create_empty(stack):
    return len(stack) == 0


def push(stack,item):
    stack.append(item)
    print('stack'+ item)

def pop(stack):
    if (create_empty(stack)):
        return 'stack is empty'
    else:
        return stack.pop()

stack = create_stack()
push(stack,str(5))
push(stack,str(3))
pop(stack)
print(stack)
        




