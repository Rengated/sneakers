export const cartReducer = (
  state = { cartItems: [], showCart: false },
  action
) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cartItems: [...action.payload] };

    case "ADD_TO_CART":
      let addFlag = true;
      state?.cartItems?.forEach((element) => {
        if (Number(element.id) === Number(action.payload.id)) {
          addFlag = false;
        }
        return;
      });
      if (!addFlag) {
        return { ...state };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state?.cartItems.filter(
          (item) => Number(item.id) !== Number(action.payload.id)
        ),
      };
    case "TOGGLE_CART":
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};
