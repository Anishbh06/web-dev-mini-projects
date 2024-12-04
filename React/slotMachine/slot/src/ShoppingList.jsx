import React from 'react'

function ShoppingList({items}) {
  return (
   <ul>
        {items.map(i => <li>{i.item}-{i.quantity}</li>)}
   </ul>
  )
}

export default ShoppingList