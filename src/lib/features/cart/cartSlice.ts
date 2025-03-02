import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        item: Omit<CartItem, "quantity">;
        quantity: number;
      }>
    ) => {
      const { item, quantity } = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ ...item, quantity });
      }
    },
    increaseItemQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) item.quantity += 1;
    },
    decreaseItemQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const item = state.cart.find((cartItem) => cartItem.id === id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
        }
      }
    },
  },
});

export const { addToCart, increaseItemQuantity, decreaseItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
