let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = ' ';    
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;  
        }else if(buttonText == 'C'){
            screenvalue = "";
            screen.value = screenvalue;
        }else if(buttonText == '='){
            screen.value = eval(screenvalue);
        }else if(buttonText == 'CE'){
            screenvalue = screenvalue.substr(0,screenvalue.length-1);
            screen.value = screenvalue;
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
       
    })
}


