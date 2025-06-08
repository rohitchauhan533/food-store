import React, { useContext, useState } from "react";
import useStyles from "./food.styles";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const classes = useStyles();

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser}  = useContext(UserContext);

  // Subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items)

  return ( 
    <div
      className="header_container"
      style={{
        background: "red",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="header_icon">
        <img src="" alt="foodIcon" />
      </div>
      <div className="header_navigation">
        <ul
          className="navigation-item"
          style={{ display: "flex", gap: "16px" }}
        >
        <li>Online status: {onlineStatus ?"🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">contact Us</Link>
          </li>
          <li>
          <Link to="/grocery">Grocery</Link>
          </li>

          <li>
          <Link to="/cart">Cart- ({cartItems.length} items)</Link></li>
          <button
            className={classes.loginBtn}
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
