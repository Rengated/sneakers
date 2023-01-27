export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orderItems: [...action.payload] };
    default:
      return state;
  }
};
