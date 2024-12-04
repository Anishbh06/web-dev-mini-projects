const player = document.querySelector('#player')
const computer = document.querySelector('#computer')
const result = document.querySelector('#result')
const button = document.querySelectorAll('button')

let p;
let comp;
let res;

button.forEach(btn => btn.addEventListener('click', () =>{
    p = btn.textContent;
    computerTurn()
    player.textContent = `Player: ${p}`
    computer.textContent = `Computer: ${comp}`
    result.textContent = checkWinner()
}))

function computerTurn(){
    let choice = Math.floor(Math.random()*3)+1;

    switch(choice){
        case 1: return comp = 'Paper'
                break;
        case 2: return comp = 'Rock'
                break;
        case 3: return comp = 'Scissors'
                break;
    }

}

function checkWinner(){
    if (p == comp){
        return 'Draw'
    }
    else if(p == 'Rock'){
        return (comp == 'Scissors' )? 'You win':'You lose'
    }
    else if(p == 'Paper'){
        return (comp == 'Rock')? 'You Win':'You lose'
    }
    else if(p == 'Scissors'){
        return (comp == 'Paper')? 'You Win':'You lose'
    }
}


