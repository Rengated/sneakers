export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: [...action.payload] };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
