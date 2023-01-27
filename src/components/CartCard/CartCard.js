import { useCard } from "../../hooks/useCard";
import styles from "./cart-card.module.css";

export const CartCard = ({ id, imageUrl, price, title }) => {
  const { deleteFromCart } = useCard(id, title, price, imageUrl);
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={require(`../../${imageUrl}`)}
        alt={title}
      />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price} руб.</p>
      </div>
      <button
        className={styles.delete}
        onClick={deleteFromCart}>
        x
      </button>
    </div>
  );
};
