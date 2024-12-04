const quizData = [
    {
        question: 'How old are you',
        a : '10',
        b : '20',
        c : '30',
        d : '40',
        correct : 'b'
    } , {
        question: 'Whats Your name',
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
        question: 'Which is the most used language',
        a : 'Java',
        b : 'Javascript',
        c : 'Python',
        d : 'C++',
        correct : 'a'
    }
]

const question = document.querySelector('#question')

let currQuestion
loadQuiz();

function loadQuiz(){

    const currData = quizData[currQuestion];
    question.innerHTML = currData.question;
    




}




