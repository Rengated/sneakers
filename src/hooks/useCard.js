import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCard = (id, title, price, imageUrl) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const favorite = useSelector((state) => state.favoriteReducer.favoritItems);
  const cart = useSelector((state) => state.cartReducer.cartItems);

  const data = {
    title: title,
    id: id,
    price: price,
    imageUrl: imageUrl,
  };

  useEffect(() => {
    favorite?.forEach((element) => {
      if (Number(element.id) === Number(id)) {
        setIsFavorite(true);
        return;
      }
    });
    cart?.forEach((element) => {
      if (Number(element.id) === Number(id)) {
        setIsInCart(true);
        return;
      }
    });
  }, [favorite, cart]);

  const toggleFavorites = async () => {
    if (isFavorite) {
      try {
        await axios.delete(
          `https://60d62397943aa60017768e77.mockapi.io/favorites/${id}`
        );
        setIsFavorite(false);
        dispatch({ type: "DELETE_FROM_FAVORITE", payload: data });
      } catch (e) {
        console.log("Ошибка удаленния из избранных", e);
      }
    } else {
      try {
        await axios.post(
          "https://60d62397943aa60017768e77.mockapi.io/favorites",
          data
        );
        setIsFavorite(true);
        dispatch({ type: "ADD_TO_FAVORITE", payload: data });
      } catch (e) {
        console.log("Ошибка добавления в избранные", e);
      }
    }
  };

  const toggleCart = async () => {
    if (isInCart) {
      try {
        await axios.delete(
          `https://60d62397943aa60017768e77.mockapi.io/cart/${id}`
        );
        dispatch({ type: "DELETE_FROM_CART", payload: data });
        setIsInCart(false);
      } catch (e) {
        console.log("Ошибка удаления", e);
      }
    } else {
      try {
        await axios.post(
          "https://60d62397943aa60017768e77.mockapi.io/cart",
          data
        );
        dispatch({ type: "ADD_TO_CART", payload: data });
        setIsInCart(true);
      } catch (e) {
        console.log("Ошибка добавления в корзину", e);
      }
    }
  };

  const deleteFromCart = async () => {
    try {
      axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`);
      dispatch({ type: "DELETE_FROM_CART", payload: data });
      setIsInCart(false);
    } catch (e) {
      console.log("Ошибка удаления", e);
    }
  };

  return { isFavorite, isInCart, toggleFavorites, toggleCart, deleteFromCart };
};
