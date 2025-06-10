import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import useStyles from "./food.styles";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const classes = useStyles();

  const [listOfRestraurant, setListOfRestraurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestraurant(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)return <h1>looks like you are offline please check your internet connection</h1>


  return listOfRestraurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className={classes.searchBtn}>
          <input
            type="text"
            className={classes.searchBox}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestraurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className={classes.resContainer}>
        {filteredRestaurant.map((restaurant) => (
          <Link to= {"/restaurants/" + restaurant?.info?.id}>
            <RestaurantCard
              resData={restaurant?.info}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
