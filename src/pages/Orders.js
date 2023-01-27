import { Layout } from "../components/Layout";
import { Sneakers } from "../components/Sneakers/Sneakers";
import { useSelector } from "react-redux";

export const Orders = () => {
  const items = useSelector((state) => state.itemsReducer.items);

  return (
    <Layout>
      <Sneakers items={items}>
        <h2>Мои покупки</h2>
      </Sneakers>
    </Layout>
  );
};
