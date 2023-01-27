import styles from "./card.module.css";
import heart from "../../svg/heart.svg";
import pinkHeart from "../../svg/heart-pink.svg";
import plus from "../../svg/plus.svg";
import cartPlus from "../../svg/cartPlus.svg";
import { useCard } from "../../hooks/useCard";
import { useEffect } from "react";

export const Card = ({ title, id, price, imageUrl }) => {
  const { isFavorite, isInCart, toggleFavorites, toggleCart } = useCard(
    id,
    title,
    price,
    imageUrl
  );

  useEffect(() => {}, [isInCart]);

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.item_wrapper}>
          <img
            className={styles.like_btn}
            onClick={toggleFavorites}
            src={!isFavorite ? heart : pinkHeart}
            alt="heart"></img>
          <img
            className={styles.item}
            src={require(`../../${imageUrl}`)}
            alt="sneaker"></img>
        </div>
        <p className={styles.name}>{title}</p>
        <div className={styles.bottom}>
          <div className={styles.price}>
            <p className={styles.price_title}>Цена:</p>
            <p className={styles.price_count}>{price}</p>
          </div>
          <div
            onClick={toggleCart}
            className={styles.plus_btn}>
            <img
              src={!isInCart ? plus : cartPlus}
              alt="plus"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
