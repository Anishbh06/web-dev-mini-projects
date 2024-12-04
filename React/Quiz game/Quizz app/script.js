
const quizData = [
    {
        question:'How many days are there in a week?',
        a: '365 days',
        b: '400 days',
        c: '325 days',
        d: '225 days',
        correct: 'a'
    },
    {
        question:'Who is actor in Mission Impossible?',
        a: 'Jake Paul',
        b: 'Ranveer Singh',
        c: 'Paul Rudd',
        d: 'Tom Cruise',
        correct: 'd'
    },
    {
        question:'Who is the most famous Youtuber of UK?',
        a: 'Logan Paul',
        b: 'Jake Paul',
        c: 'KSI',
        d: 'XQC',
        correct: 'c'
    }
] 

const ques = document.querySelector('#question');
const opA = document.querySelector('.opa');
const opB = document.querySelector('.opb');
const opC = document.querySelector('.opc');
const opD = document.querySelector('.opd');
const submit = document.querySelector('#sub');

let currQ = 0;

startQuiz();

function startQuiz() {
    const currQuestion = quizData[currQ];
    ques.innerText = currQuestion.question;
    opA.innerText = currQuestion.a;
    opB.innerText = currQuestion.b;
    opC.innerText = currQuestion.c;
    opD.innerText = currQuestion.d;
}

submit.addEventListener('click', () => {
    currQ++;
    startQuiz()
})

