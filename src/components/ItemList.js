import { Button, Grid } from '@mui/material'
import React from 'react'
import useStyles from './food.styles'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemList = ({items}) => {




    const classes = useStyles()

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
      // dispatch an action to add item to cart
     dispatch(addItem(item))
    }
    console.log(items, "itemList")
  return (
    <Grid>
      <ul>
      {items.map((item) => (
        <div key={item.card.info.id} style={{border: "1px solid black"}}>
        <div className= {classes.itemInfo}>
        <span>{item.card.info.name}</span>
        <span> Rs {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</span>
        </div>
        <p>{item.card.info.description}</p>

        <Button onClick={() => handleAddItem(item)}>ADD Item</Button>


        </div>) )}
      </ul>
    </Grid>
  )
}

export default ItemList
