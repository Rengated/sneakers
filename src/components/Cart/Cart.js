import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "../CartCard/CartCard";
import { WithoutData } from "../WithoutData/WithoutData";
import styles from "./cart.module.css";
import box from "../../img/box.png";
import { useState } from "react";

export const Cart = () => {
  const [isOrder, setIsOrder] = useState(false);
  const items = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const cartPrice = items?.reduce((prev, current) => prev + current.price, 0);
  const fix = Math.round(cartPrice * 0.05);

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const makeOrder = () => {
    setIsOrder(true);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Корзина</h1>
          <p
            className={styles.closeCart}
            onClick={toggleCart}>
            x
          </p>
        </div>
        {items?.length ? (
          <>
            {!isOrder ? (
              <>
                <div className={styles.items}>
                  {items &&
                    items.map((item, index) => (
                      <CartCard
                        {...item}
                        key={index}
                      />
                    ))}
                </div>
                <div className={styles.total}>
                  <div className={styles.row}>
                    <p className={styles.text}>Итого:</p>
                    <p className={styles.number}>{cartPrice} руб.</p>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.text}>Налог 5%:</p>
                    <p className={styles.number}>{fix} руб.</p>
                  </div>
                  <button
                    onClick={makeOrder}
                    className={styles.button}>
                    Оформить заказ →
                  </button>
                </div>
              </>
            ) : (
              <WithoutData
                changeColor={true}
                title={"Заказ оформлен!"}
                subtitle={
                  "Ваш заказ #18 скоро будет передан курьерской доставке"
                }
                onClick={toggleCart}>
                <img src={box} />
              </WithoutData>
            )}
          </>
        ) : (
          <WithoutData
            title={"Корзина пустая"}
            subtitle={
              "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            onClick={toggleCart}>
            <img
              src={box}
              alt="box"
            />
          </WithoutData>
        )}
      </div>
    </div>
  );
};
