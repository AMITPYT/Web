import pyttsx3
import datetime
import speech_recognition as sr
import wikipedia
import webbrowser
import os 
import smtplib


engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice',voices[0].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def wishme():
    hour = int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak("Good morning!")
    elif hour>=12 and hour<18:
        speak("Good afternoon!")
    else:
        speak("Good evening")
    speak("I am jarvis sir . Please tell me how may i help you")                   

def takecommand():
     
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")    
        query = r.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n")

    except Exception as e:
        # print(e)    
        print("Say that again please...")  
        return "None"
    return query

def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('amitkumar171117@gmail.com', 'amit171117')
    server.sendmail('amitkumar171117b', to, content)
    server.close()

        

if __name__=="__main__":
    wishme()
    if 1:
        query = takecommand().lower()


        if 'wikipedia'in query:
            speak("seraching wikipedia")
            query = query.replace("wikipedia","")
            results = wikipedia.summary(query,sentences=2)
            speak("According to wikipedia")
            speak(results)

        elif "open youtube" in query:
            webbrowser.open("youtube.com")

        elif"open google" in query:
            webbrowser.open("google.com")

        elif"stackoverflow" in query:
            webbrowser.open("stackoverflow.com")

        elif "play music " in query:
            music_dic = "C:\\Songs\\favorite songs"
            songs = os.listdir(music_dir)
            print(songs)
            os.startfile(os.path.join(music_dic,songs[1]))

        elif "the time" in query:
            strTime = datetime.datetime.now().strftime("%H:%M:%S")
            speak(f"Sir . the time is {strTime}")  

        elif "open code" in query:
            codePathe = "C:\\Users\\Asus\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Visual Studio Code" 
            os.startfile(codePathe)

        elif 'email to vipin' in query:
            try:
                speak("What should I say?")
                content = takecommand()
                to = "vipinrai2300@gmail.com"    
                sendEmail(to, content)
                speak("Email has been sent!")
            except Exception as e:
                print(e)
                speak("Sorry my friend Aamit . I am not able to send this email")   

                       