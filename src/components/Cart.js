import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { Button } from '@mui/material'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector((store) => store.cart.items)

    const handleClearCart = () => {
        dispatch(clearCart())

    }
  return (
    <div>
      Cart
      <div>
      <Button onClick={handleClearCart}>Clear Cart</Button>
      {cartItems.length === 0 && <h2>cart is empty , add something</h2>}
      <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart
