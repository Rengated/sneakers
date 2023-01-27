import { createStore } from "redux";
import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { itemsReducer } from "./reducers/itemsReducer";
import { ordersReducer } from "./reducers/ordersReducer";

const rootReducer = combineReducers({
  cartReducer,
  favoriteReducer,
  itemsReducer,
  ordersReducer,
});
export const store = createStore(rootReducer);
