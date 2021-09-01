import React, { Component } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Goodie Boddie Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://cdn.shopify.com/s/files/1/1083/2612/articles/unnamed_b6640cb7-d196-4d08-948c-51f9bb8c0dd9_2000x.jpg?v=1588624306"
          alt="meals"
        />
      </div>
    </>
  );
};
export default Header;
