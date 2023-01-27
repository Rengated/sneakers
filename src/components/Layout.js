import { Header } from "./Header/Header";
import styles from "../styles/home.module.css";

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};
