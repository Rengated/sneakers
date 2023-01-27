import { useState } from "react";
import { useSelector } from "react-redux";
import loupe from "../../svg/loupe.svg";
import styles from "./search.module.css";

export const Search = ({ items, setItems }) => {
  const onInputChange = (e) => {
    const filteredItems = items.filter((item) =>
      item.title.includes(e.target.value)
    );
    setItems(filteredItems);
  };

  return (
    <div className={styles.search}>
      <img
        className={styles.loupe}
        src={loupe}
        alt="loupe"></img>
      <input
        onChange={onInputChange}
        className={styles.input}
        placeholder="Поиск..."
        type="text"
      />
    </div>
  );
};
