
# Akhbaar padhke sunaao
import requests
import json

def speak(str):
    from win32com.client import Dispatch
    speak = Dispatch("SAPI.SpVoice")
    speak.Speak(str)

if __name__ == '__main__':
    speak("News for today.. Lets begin")
    url = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=63bf5f710b044f8dbc0bf36108d8d2c7"
    news = requests.get(url).text
    news_dict = json.loads(news)
    arts = news_dict['articles']
    for article in arts:
        speak(article['title'])
        print(article['title'])
        speak("Moving on to the next news..Listen Carefully")

    speak("Thanks for list...")


# def speak(str):
#     from win32com.client import Dispatch
#     speak = Dispatch("SAPI.SpVoice")
#     speak.Speak(str)
# if __name__ == '__main__':
#     speak("Amit,Pooja,Chandni,Soni")