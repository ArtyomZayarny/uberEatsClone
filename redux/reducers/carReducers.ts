const initialState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'ADD_TO_CART': {
      const newState = { ...state };

      if (payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, payload],
          restaurantName: payload.restaurantName,
        };
      } else {
        newState.selectedItems = {
          items: [...newState.selectedItems.items.filter((item) => item.title !== payload.title)],
          restaurantName: payload.restaurantName,
        };
      }

      return newState;
    }
    default:
      return state;
  }
};
