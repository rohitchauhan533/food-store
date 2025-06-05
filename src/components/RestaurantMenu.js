import React from "react";
import useStyles from "./food.styles";
import { Grid } from "@mui/material";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategories from "./ResCategories";

const RestaurantMenu = () => {
  const classes = useStyles();

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories, "categories");

  return (
    <Grid className={classes.menu}>
      <h1 style={{ fontWeight: "700", fontSize: "40px" }}>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>

      {/* categories accordion */}

      {categories.map((category) => (
        <ResCategories
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems = {false}
        />
      ))}
    </Grid>
  );
};

export default RestaurantMenu;
