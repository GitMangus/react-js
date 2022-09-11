import React from 'react'
import Button from '@mui/material/Button'

const ItemCount = ({ stock, counter, setCounter, handleAgregar }) => {



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
      <Button onClick={handleAgregar} sx={{ display: 'flex', flexDirection: 'column', my: 2 }} size="small" variant="contained" color="success" disabled={counter === 0}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount;