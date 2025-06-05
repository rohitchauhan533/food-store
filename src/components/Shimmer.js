import React from 'react'
import useStyles from './food.styles'

const Shimmer = () => {

    const classes = useStyles()
  return (
    <div className={classes.shimmerContainer}>
    <div className={classes.shimmerCard}></div>
    </div>
    
  )
}

export default Shimmer