import React from "react";
import logoImage from "../../assets/Images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img alt="MyBurger" src={logoImage} />
  </div>
);

export default logo;
