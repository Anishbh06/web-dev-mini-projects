const p1btn = document.querySelector('#p1Point');
const p2btn = document.querySelector('#p2Point');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const reset = document.querySelector('#reset');
const toWinningScore = document.querySelector('#toSelect');
const announce = document.createElement('h2');

let p1Score = 0;
let p2Score = 0;
let gameWin = 3;
let isGameOver = false;


p1btn.addEventListener('click', function(){
    if(!isGameOver){
        p1Score+=1;
    if(p1Score === gameWin){
       isGameOver = true;
       
        
    }
    p1Display.innerText = p1Score;
   }
    
})

p2btn.addEventListener('click', function(){
    if(!isGameOver){
        p2Score+=1;
    if(p2Score === gameWin){
        isGameOver = true;
    }
    p2Display.innerText = p2Score;
}
})

toWinningScore.addEventListener('change',function(){
     gameWin = parseInt(this.value);
})

reset.addEventListener('click', function(){
    isGameOver = false;
    p1Display.innerText= 0;
    p2Display.innerText= 0;
    p1Score = 0;
    p2Score = 0;
})

