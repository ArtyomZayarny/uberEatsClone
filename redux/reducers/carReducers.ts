const initialState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

export const cartReducer = (action, state = initialState) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newState = { ...state };

      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        newState.selecteItems = {
          items: [...newState.selectedItems.items.filter((item) => item.title !== action.payload.title)],
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState;
    }
    default:
      return state;
  }
};
