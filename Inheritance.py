# Multi inheritance
class Dad:
    ludo = 55

class Son(Dad):
    cricket = 23
    def iscricket(self):
        return f"very impreseive win {self.cricket} for you"
class Grandson(Son):
     dance = 6

Ramnarayan = Dad()
Amit = Son()
Anuth = Grandson()
print(Amit.iscricket)


