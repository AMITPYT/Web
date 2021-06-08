import json
from difflib import get_close_matches

data = json.load(open("data.json"))

def translate(word):
    word = word.lower()
    if word in data:
        return data[word]
    elif word.title in data:
        return data[word.title]
    elif word.upper in data:
        return data[word.upper]  
    elif len(get_close_matches(word,data.key())) > 0:
        print("did you mean %s instead"%get_close_matches(word,data.key())[0])
        decide = input("Enter y for yes or n for no")    
        if decide == y:
            return data(get_close_matches(word,data.key())[0])
        elif decide == n :
            return ("Your step on wrong key")  
        else:
            print("You enter wrong input plz enter y or n")          
    else:
        print("Enter the valid word")    



word = input("Enter the word you want to search: ")
output = translate(word)
if type(output) == list:
    for item in output:
        print(item)
else:
    print(output)        