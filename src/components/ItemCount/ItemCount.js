import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button'

const ItemCount = ({ stock }) => {

  const [counter, setCounter] = useState(1) //Estado: variable de la cual mi comp. depende p/su renderizado 
  
  const handleSumar = () => {
    if (counter < stock)
      setCounter(counter + 1)
  }

  const handleRestar = () => {
    if (counter > 0)
      setCounter(counter - 1)   
  }

  return (
    <div>
      <br />
      <Button onClick={handleRestar}>-</Button> 
      <span>{counter}</span>
      <Button onClick={handleSumar}>+</Button>
      <Button size="small" variant="contained">Comprar</Button>
    </div>
  )
}

export default ItemCount;