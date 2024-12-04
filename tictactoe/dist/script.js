const boxes = Array.from(document.querySelectorAll('.box'))
const restart = document.querySelector('#restart')
const h1 = document.querySelector('#status')



let px = 'X'
let po = 'O'
let currPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let gameActive = true


boxes.forEach(ele => {
    ele.addEventListener('click', handleClick);
});



function handleClick (e){
    const index =parseInt(e.target.id)-1;
   

    if(gameBoard[index] == '' && gameActive === true){
        gameBoard[index] = currPlayer;
       e.target.innerText = currPlayer

       if(checkWinner()){
        h1.innerText = `Player ${currPlayer} has won!!`;
        gameActive = false
    }else if (gameBoard.every(cell => cell != '')){
        h1.innerText = 'TIE'
        gameActive = false
    }else{
        currPlayer = currPlayer==='X'? po:px
     }

    }
    
}


function checkWinner(){
    const winningCombo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] 
    ];

    return winningCombo.some(combo =>{
        const [a, b, c] = combo
        return gameBoard[a] != '' && gameBoard[a] == gameBoard[b] && gameBoard[a] == gameBoard[c]
    })
}


// Restart game

function restartGame(){
    boxes.forEach(box=>{
        box.innerText = '';
    });
    
    currPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameActive = true;
}

restart.addEventListener('click', restartGame)












