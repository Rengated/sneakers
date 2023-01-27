import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "../Card/card.module.css";

export const SkeletonCard = () => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <Skeleton className={"skeleton"} width={150} height={90} />
        <Skeleton width={133} height={15} />
        <Skeleton width={100} height={15} />

        <Skeleton width={30} height={32} borderRadius={8} />
      </div>
    </div>
  );
};
