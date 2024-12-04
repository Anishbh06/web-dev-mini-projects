import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 
          shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button onClick={() => setColor('red')}
            className="outline-nonr px-4 text-black shadow-lg"
            style={{backgroundColor: 'red'}}>
              Red</button>
            <button onClick={() => setColor('green')}
            className="outline-nonr px-4 text-black shadow-lg"
            style={{backgroundColor: 'green'}}>
              Green</button>
            <button onClick={() => setColor('blue')}
            className="outline-nonr px-4 text-black shadow-lg"
            style={{backgroundColor: 'blue'}}>
              Blue</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
