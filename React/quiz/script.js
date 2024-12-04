const quizData = [
    {
        question: 'How old are you?',
        a : '10',
        b : '20',
        c : '30',
        d : '40',
        correct : 'b'
    } , {
        question: 'Whats Your name?',
        a : 'Flynn',
        b : 'Olivia',
        c : 'Fred',
        d : 'Harry',
        correct : 'd'
    }, {
        question: 'Who is the Hero in Mission Impossible?',
        a : 'Flynn',
        b : 'Olivia',
        c : 'Tom Cruise',
        d : 'Harry',
        correct : 'c'
    } , {
        question: 'Which is the most used language?',
        a : 'Java',
        b : 'Javascript',
        c : 'Python',
        d : 'C++',
        correct : 'a'
    }
]

const question = document.querySelector('#question')
const a_text = document.querySelector('#ansa')
const b_text = document.querySelector('#ansb')
const c_text = document.querySelector('#ansc')
const d_text = document.querySelector('#ansd')
const submit = document.querySelector('#submit')
const answersEls = document.querySelectorAll('.options')
const display = document.querySelector('#container')

let currQuestion= 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deSelected()
    const currData = quizData[currQuestion];


    question.innerHTML = currData.question;
    a_text.innerText = currData.a;
    b_text.innerText = currData.b;
    c_text.innerText = currData.c;
    d_text.innerText = currData.d;
}

function selected(){
    let answer = undefined;

    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =  answerEl.id
        }
    })
    return answer
}

function deSelected(){
     
    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answerEl.checked = false;
        }
    })
   
}

submit.addEventListener('click', () =>{
    const ans =selected()

    if(ans === quizData[currQuestion].correct){
        score++;
    }

    if(ans){
    if(currQuestion < quizData.length -1){
        currQuestion ++;
        loadQuiz()
    }else{
            display.innerHTML = `<h1>Your score is : ${score} out of 4</h1>`        
    }
}
   
})




