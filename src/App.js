import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Cart } from "./components/Cart/Cart";
import { Orders } from "./pages/Orders";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cartReducer.showCart);

  useEffect(() => {
    const fetch = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      const [cartResponse, favoritesResponse, itemsResponse] =
        await Promise.all([
          axios.get("https://60d62397943aa60017768e77.mockapi.io/cart"),
          axios.get("https://60d62397943aa60017768e77.mockapi.io/favorites"),
          axios.get("https://60d62397943aa60017768e77.mockapi.io/items"),
        ]);
      dispatch({ type: "SET_CART", payload: cartResponse.data });
      dispatch({ type: "SET_FAVORITE", payload: favoritesResponse.data });
      dispatch({ type: "SET_ITEMS", payload: itemsResponse.data });
      dispatch({ type: "SET_LOADING", payload: false });
    };
    fetch();
  }, []);

  return (
    <Router>
      {showCart && <Cart />}
      <Routes>
        <Route
          path="/"
          element={<Home />}></Route>
        <Route
          path="/favorite"
          element={<Favorite />}></Route>
        <Route
          path="/orders"
          element={<Orders />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
