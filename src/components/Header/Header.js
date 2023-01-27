import styles from "./header.module.css";
import logo from "../../img/logo.png";
import cart from "../../svg/cart.svg";
import heart from "../../svg/heart.svg";
import account from "../../svg/account.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = ({ setCartActive }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const price = cartItems?.reduce((prev, current) => prev + current.price, 0);

  const goToIndex = () => {
    navigate("/");
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={goToIndex}>
        <img
          className={styles.img}
          src={logo}
          alt="logo"></img>
        <div>
          <p className={styles.title}>REACT SNEAKERS</p>
          <p className={styles.subtitle}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.cart}>
          <img
            className={styles.cart_icon}
            src={cart}
            onClick={toggleCart}
            alt=""></img>
          <p className={styles.cart_price}>
            {price}
            р.
          </p>
        </div>
        <img
          className={styles.heart}
          onClick={() => {
            navigate("/favorite");
          }}
          src={heart}
          alt=""></img>
        <img
          className={styles.account}
          onClick={() => {
            navigate("/orders");
          }}
          src={account}
          alt=""></img>
      </div>
    </header>
  );
};
