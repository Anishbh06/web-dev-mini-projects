import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = () => {
    if (counter <= 20)
      setCounter(counter + 1)
  }

  const removeValue = () =>{
    if(counter > 0 )
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter Value: {counter}</h3>

      <button onClick={addValue}>Add {counter}</button>
      <button onClick={removeValue}>Remove {counter} </button>

      <p>Footer {counter}</p>
      
     
    </>
  )
}

export default App
