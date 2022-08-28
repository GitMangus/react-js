import React from 'react'
import { useState } from 'react';

const ItemCount = () => {

const [counter, setCounter] = useState(1)

const handleSumar = () => {
  if(counter < 10)
  setCounter (counter + 1)
}

const handleRestar = () => {
  if(counter > 0)
  setCounter (counter - 1)
}

  return (
    <div>
      <h2>Contador</h2>
      <br/>
      <button onClick={handleRestar}>-</button>
      <span>{counter}</span>
      <button onClick={handleSumar}>+</button>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;