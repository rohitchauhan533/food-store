import React from "react";
import Grid from "@mui/material/Grid";
import useStyles from "./food.styles";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const classes = useStyles();

  const { resData } = props;
  console.log(resData, "resData in restaurant card");

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <Grid className={classes.mainCardContainer}>
    <img
    src={CDN_URL + cloudinaryImageId}
    className={classes.resLogo}
    alt="res-logo"
  />
      <Grid>
        {" "}
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </Grid>

    </Grid>
  );
};

export default RestaurantCard;
