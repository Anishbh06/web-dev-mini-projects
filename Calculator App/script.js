const btns = document.querySelectorAll('.dot, .div, .seven, .eight, .nine, .mul, .four, .five, .six, .sub, .one, .two, .three, .add, .zero, .dot')
const screen = document.querySelector('.screen')
const clear = document.querySelector('#clr')
const del = document.querySelector('#delete')
const equal = document.querySelector('.equal')

btns.forEach(btn => btn.addEventListener('click', () =>{
    screen.value += btn.innerText;
}))

clear.addEventListener('click', () =>{
    screen.value = ''
})

del.addEventListener('click', () => {
    let screenValue = screen.value;
    // Use slice to remove the last character
    let updatedValue = screenValue.slice(0, -1);
    // Update the screen value
    screen.value = updatedValue;
})


equal.addEventListener('click',  () => {
    // let screenValue = screen.value;
    // let numArray = screenValue.split('+')
    
    // let num1 = parseInt(numArray[0])
    // let num2 = parseInt(numArray[1])

    // res = num1 + num2;

    // console.log(res)

    if(screen.value === ''){
        screen.value = ''
    }
    else {
        let evaluate = eval(screen.value)
        screen.value = evaluate;
    }
    

})