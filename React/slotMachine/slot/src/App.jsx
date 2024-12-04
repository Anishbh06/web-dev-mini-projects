
import ShoppingList from './ShoppingList'
import './App.css'

const data = [
  {item: 'eggs', quantity: 12, completed: true},
  {item: 'milk', quantity: 5, completed: true},
  {item: 'chicken', quantity: 2, completed: true},
]

function App() {

  return (
    <>
      <ShoppingList items={data} />
    </>
  )
}

export default App
