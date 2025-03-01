import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "./pizzaAPI";

interface InitialState {
  pizza: { id: string }[];
  pizzaErro: string;
  pizzaCart: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
  numOfPizzaInCart: number;
}

const initialState: InitialState = {
  pizza: [],
  pizzaErro: "",
  pizzaCart: [],
  numOfPizzaInCart: 0,
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    addPizzaToCart: (state, action) => {
      const inCart = state.pizzaCart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      if (!inCart) {
        state.pizzaCart = [
          ...state.pizzaCart,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        state.pizzaCart = state.pizzaCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      state.numOfPizzaInCart = state.numOfPizzaInCart + 1;
    },
    removePizzaFromCart: (state, action) => {
      state.pizzaCart = state.pizzaCart.filter((item) =>
        item.id != action.payload.id ? item : null
      );
      state.numOfPizzaInCart =
        state.numOfPizzaInCart > 0
          ? state.numOfPizzaInCart - action.payload.quantity
          : state.numOfPizzaInCart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { addPizzaToCart, removePizzaFromCart } = pizzaSlice.actions;
export default pizzaSlice.reducer;
