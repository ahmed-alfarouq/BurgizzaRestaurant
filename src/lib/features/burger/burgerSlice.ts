import { createSlice } from "@reduxjs/toolkit";
import { fetchBurgers } from "./burgerAPI";

interface InitialState {
  burger: { id: string }[];
  burgerError: string;
  burgerCart: { id: string; quantity: number }[];
  numOfBurgerInCart: number;
}

const initialState: InitialState = {
  burger: [],
  burgerError: "",
  burgerCart: [],
  numOfBurgerInCart: 0,
};

const bugerSlice = createSlice({
  name: "burgerSlice",
  initialState,
  reducers: {
    addBurgerToCart: (state, action) => {
      const inCart = state.burgerCart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      if (!inCart) {
        state.burgerCart = [
          ...state.burgerCart,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        state.burgerCart = state.burgerCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      state.numOfBurgerInCart = state.numOfBurgerInCart + 1;
    },
    removeBurgerFromCart: (state, action) => {
      state.burgerCart = state.burgerCart.filter((item) =>
        item.id != action.payload.id ? item : null
      );
      state.numOfBurgerInCart =
        state.numOfBurgerInCart > 0
          ? state.numOfBurgerInCart - action.payload.quantity
          : state.numOfBurgerInCart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchBurgers.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { addBurgerToCart, removeBurgerFromCart } = bugerSlice.actions;
export default bugerSlice.reducer;
