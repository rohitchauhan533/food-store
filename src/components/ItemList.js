import { Button, Grid } from '@mui/material'
import React from 'react'
import useStyles from './food.styles'

const ItemList = ({items}) => {

    const classes = useStyles()
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

        <Button>ADD Item</Button>


        </div>) )}
      </ul>
    </Grid>
  )
}

export default ItemList
