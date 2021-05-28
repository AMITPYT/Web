import random
def hangman():
    words = random.choice(["pugger","littlepugger","tiger","lion","avenger","thor","spiderman","ironman","hulk","natasha"])
    validLetter = "abcdefghijklmnopqrstuvwxyz"
    true = 10
    guessmade = " "

    while len(words) > 0:
        main = ""
        missed = 0

        for letter in words:
            if letter in guessmade:
                main = main + guessmade
            else:
                main = main + " _" + " "
        if main == words:
            print("main")
            print("*****You Win******")
            break

        print("guess the word:",main)
        guess = input()            
        
        if guess in validLetter:
            guessmade = guessmade + guess
        else:
            print("Enter the valid character")
            # guess = input()

        if guess not in words:
            turn = trun + 1  
             
            if turn == 9:
                print("9 trun left ")
                print(" --------- ")
            if turn == 8:
                print(" 8 trun left ")
                print(" ----------- ")
                print("     o      ")          
            if turn == 7:
                print(" 7 trun left ")
                print(" ----------- ")
                print("     o     ")          
                print("     |     ")
            if turn == 6:
                print(" 6 trun left ")
                print(" ----------- ")
                print("     o     ")          
                print("     |     ")
                print("    /      ")
            if turn == 5:
                print(" 5 trun left ")
                print(" ----------- ")
                print("     o     ")          
                print("     |     ")
                print("    / \     ")
            if turn == 4:
                print(" 4 trun left ")
                print(" ----------- ")
                print("   \ o     ")          
                print("     |     ")
                print("    / \     ")  
            if turn == 3:
                print(" 3 trun left ")
                print(" ----------- ")
                print("   \ o /   ")          
                print("     |     ")
                print("    / \     ")      
            if turn == 2:
                print(" 2 trun left ")
                print(" ----------- ")
                print("   \ o /|   ")          
                print("     |     ")
                print("    / \     ")    
            if turn == 1:
                print(" 1 trun left ")
                print("Last breath to counting,take Care")
                print(" ----------- ")
                print("   \ o_|/   ")          
                print("     |     ")
                print("    / \     ")  
            if turn == 0:
                print(" 0 trun left ")
                print("You loose!!!")
                print("Your man was die ")
                print(" ----------- ")
                print("   \ o_/   ")          
                print("     |     ")
                print("    / \     ")               
    

Name = input("Enter your name :")
print("Welcome",Name)
print("*******************************")
print("Try to guess the words in less than 10 attempts ")
hangman()
print()