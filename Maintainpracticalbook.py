"""
LAB 26:
    Maintain practical note book as per 
    their serial numbers in library using Python dictionary.
"""
D1 = {}
D1 = {1 : "Compute sum, subtraction, multiplication, division and exponent of given variables input by the user."}
D2 = {2 : "Compute area of following shapes: circle, rectangle, triangle, square, trapezoid and parallelogram."}
D1.update(D2)
D3 = {3 : "Compute volume of following 3D shapes: cube, cylinder, cone and sphere."}
D1.update(D3)
for i,j in D1.items():
    print("Program:",i,":",j)
    print()