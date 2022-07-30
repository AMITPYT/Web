const quizDB = [
    {

        question : "Q1 : HTML is what type of language?",
        a : "Scripting Language",
        b : "Markup Language",
        c : "Programming Language",
        d :   "Network Protocol",
        ans : "ans2"
    },
    {
        question : "Q2 : HTML uses ?",
        a : "User defined tags ",
        b : " Pre-specified tags",
        c : "Fixed tags defined by the language ",
        d : "Tags only for linking ",
        ans : "ans3"
    },
    {
        question : "Q3 : The year in which HTML was first proposed ?",
        a : "1990 ",
        b : "1980 ",
        c : "2000 ",
        d : "1995 ",
        ans : "ans1"
    },
    {
        question : "Q4 : Apart from <b> tag, what other tag makes text bold ?",
        a : "<fat> ",
        b : "<strong> ",
        c : " <black>",
        d : " <black>",
        ans : "ans2"
    },
    {
        question : "Q5 : How can you make a bulleted list with numbers?",
        a : "<dl> ",
        b : " <ol>",
        c : " <list>",
        d : " <ul>",
        ans : "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

 const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click' , () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML =` 
            <h3> You Scored ${score}/${quizDB.length}  </h3>
            <buton class = "btn" onclick = "location.reload()"> PLAY AGAIN</button>
        `;

        showScore.classList.remove('scoreArea');    
                               
    }
});
