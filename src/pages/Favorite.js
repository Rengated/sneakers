import { Layout } from "../components/Layout";
import { Sneakers } from "../components/Sneakers/Sneakers";
import { WithoutData } from "../components/WithoutData/WithoutData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emoji from "../img/sademoji.png";

export const Favorite = () => {
  const items = useSelector((state) => state.favoriteReducer.favoritItems);
  const navigate = useNavigate();

  const onGoBackClick = () => {
    navigate(-1);
  };

  return (
    <Layout>
      {items?.length ? (
        <>
          <Sneakers items={items}>
            <h2>Все закладки</h2>
          </Sneakers>
        </>
      ) : (
        <WithoutData
          onClick={onGoBackClick}
          title={"Закладок нет :("}
          changeColor={false}
          subtitle={"Вы ничего не добавляли в закладки"}>
          <img
            src={emoji}
            alt="emoji"
          />
        </WithoutData>
      )}
    </Layout>
  );
};
