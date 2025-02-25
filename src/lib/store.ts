import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./features/burger/burgerSlice";
import pizzaReducer from "./features/pizza/pizzaSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      burger: burgerReducer,
      pizza: pizzaReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
