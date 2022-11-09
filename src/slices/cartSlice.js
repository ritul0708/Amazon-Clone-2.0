import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },

    // Add Item to Cart
    addToCart: (state, action) => {
      const itemExists = state.items.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },


    // removing Item from cart
    removeFromCart: (state, action) => {
      // Finding Index of Item that needs to be removed from cart
      const index = state.items.indexOf(cartItem => cartItem.id === action.payload.id)
      let newCart = [...state.items]

      index ? newCart.splice(index, 1) : console.log("Can't remove Product from cart")
      state.items = newCart
    },

    // Increment quantity
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },

    // Decrement quantity
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.items.findIndex((item) => item.id === action.payload);
        state.items.splice(index, 1);
      } else {
        item.quantity--;
      }
    }

  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;

// export const Total = (state) => state.cart.items.reduce((total, item) => total + item.price*item.quantity, 0)

export default cartSlice.reducer;
