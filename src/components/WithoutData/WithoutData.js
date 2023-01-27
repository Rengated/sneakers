import { Children } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./withoutdata.module.css";

export const WithoutData = ({
  title,
  subtitle,
  children,
  changeColor,
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <p
        className={styles.title}
        style={{ color: `${changeColor ? "#87C20A" : "black"}` }}>
        {title}
      </p>
      <p className={styles.subtitle}>{subtitle}</p>
      <button
        onClick={onClick}
        className={styles.button}>
        ← Вернуться назад
      </button>
    </div>
  );
};
