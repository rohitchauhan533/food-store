import React from 'react'
import Grid from '@mui/material/Grid';
import useStyles from './food.styles';


const RestaurantCard = (props) => {

    const classes = useStyles()

    const {resData} = props;

    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData

  return (
    <Grid  className= {classes.mainCardContainer}>
    <img src='' alt='res-logo'/>
    <h3>{name}</h3>
    <h4>{cuisines}</h4>
    <h4>{avgRating}</h4>
    <h4>{costForTwo / 100} FOR TWO</h4>
    <h4>{deliveryTime} minutes</h4>

    </Grid>
  )
}

export default RestaurantCard