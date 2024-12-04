import React from 'react'

function Slot({val1, val2, val3}) {
  let  isWinner = val1===val2 && val2===val3
  return (
    <>
        <h1>
            {val1} {val2} {val3} 
        </h1>
        <h2>{isWinner? "You win": "You lose"}</h2>
        <h3>{isWinner? "congratgulations":null}</h3>
        


    </>
  )
}

export default Slot