const reduser = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id && action.payload.quantity > 0) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };
    case "GET_TOTALS": {
      const { total, quantity } = state.cart.reduce(
        (cartState, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartState.total += itemTotal;
          cartState.quantity += quantity;
          return cartState;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      return { ...state, total, quantity };
    }

    default:
      return state;
  }
};

export default reduser;
