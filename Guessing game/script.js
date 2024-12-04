let maximum = parseInt(prompt("Enter a max number"));

while(!maximum){
     maximum = parseInt(prompt("Enter a valid number"));
}   

const targetNum = Math.floor(Math.random()* maximum)+1;

let guess=prompt("enter your first guess");
let attempts=1;

while(guess!==targetNum){

    if(guess === 'q') break;

    guess=parseInt(guess);

    if(parseInt(guess) > targetNum){

        guess=prompt("Too high! Enter  a new number");
        attempts++;
    } else if(parseInt(guess)< targetNum){

        guess=prompt("Too low! Enter a new number");
        attempts++;
    }
}
if(guess==='q') {
   console.log("you quit");
} else{
    console.log(`Wohooo you got it! it took you ${guess} guesses`);
}