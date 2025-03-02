import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./features/burger/burgerSlice";
import pizzaReducer from "./features/pizza/pizzaSlice";
import cartReducer from "./features/cart/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      burger: burgerReducer,
      pizza: pizzaReducer,
      cart: cartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
