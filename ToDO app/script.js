
let input =  prompt("what would you like to do");
const todos = ['collect chicken eggs','hello'];

while( input !== "quit" && input !== "q"){

    if(input === 'list'){

        console.log('**********');

        for(let i=0; i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***************')
    } 
    else if( input === 'new'){

        const newTodo = prompt('okay what is the new Todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } 
    else if( input === 'delete'){

        const index= parseInt(prompt('Okay enter the index to delete'));
        
        if(!Number.isNan(indes)){
        
            const deleted = todos.splice(index,1);
            console.log(`okay deleted ${deleted}`);
        }
        else{
            console.log('unknown index'); 
        }
    }
    input=prompt("what would you like to do");
}
console.log("okay you quit the app byeee!")


