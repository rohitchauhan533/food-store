import { Grid } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './food.styles'
import ItemList from './ItemList'

const ResCategories = ({data, showItems, setShowIndex}) => {

    // const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
        console.log("clicked")
        setShowIndex()
        // setShowItems(!showItems)

    }
    console.log(data, "check")

  const classes = useStyles()
  return (
    <Grid style= {{width: "72rem"}}>
    <Grid className= {classes.categoryAccordion} onClick={handleClick}>
     <Grid className = "accordioncard" style={{display: "flex" , gap: "50px", width: "70rem", justifyContent: "space-between" }}>
    {data.title} ({data.itemCards.length})
   <span>🔽</span>
   </Grid>
   <Grid className= "accordion-itemLists">
   {showItems && (<ItemList items={data.itemCards}/>)}
   
   </Grid>
   </Grid>

    </Grid>
  )
}

export default ResCategories
