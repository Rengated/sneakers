import styles from "./sneakers.module.css";
import { Search } from "../Search/Search";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";

export const Sneakers = ({ items, title, children }) => {
  const skeletons = [...Array(12)];
  const isLoading = useSelector((state) => state.itemsReducer.isLoading);
  return (
    <div className={styles.sneakers}>
      <div className={styles.top}>{children}</div>
      <div className={styles.content}>
        {!isLoading
          ? items?.map((item, index) => (
              <Card
                key={index}
                {...item}
              />
            ))
          : skeletons.map((_, index) => <SkeletonCard key={index} />)}
      </div>
    </div>
  );
};
