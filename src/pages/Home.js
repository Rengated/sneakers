import { Layout } from "../components/Layout";
import styles from "../styles/home.module.css";
import adidas from "../img/adidas.png";
import { Sneakers } from "../components/Sneakers/Sneakers";
import { useSelector } from "react-redux";
import { Search } from "../components/Search/Search";
import { useEffect, useState } from "react";

export const Home = () => {
  const initialValue = useSelector((state) => state.itemsReducer.items);
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(initialValue);
  }, [initialValue]);

  return (
    <Layout>
      <div className={styles.poster}>
        <img
          src={adidas}
          className={styles.adidas}
          alt=""></img>
        <div className={styles.poster_content}>
          <h1 className={styles.poster_text}>
            Stan Smith, <span>Forever!</span>
          </h1>
          <button className="button">Купить</button>
        </div>
      </div>
      <Sneakers items={items}>
        <h2>Все кроссовки</h2>
        <Search
          items={initialValue}
          setItems={setItems}
        />
      </Sneakers>
    </Layout>
  );
};
