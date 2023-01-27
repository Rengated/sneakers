export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return { ...state, favoritItems: [...action.payload] };
    case "DELETE_FROM_FAVORITE":
      return {
        ...state,
        favoritItems: state.favoritItems.filter(
          (item) => Number(item.id) !== Number(action.payload.id)
        ),
      };
    case "ADD_TO_FAVORITE":
      let addFlag = true;
      state.favoritItems.forEach((element) => {
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
        favoritItems: [...state.favoritItems, action.payload],
      };

    default:
      return state;
  }
};
