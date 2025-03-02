import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "./pizzaAPI";

interface InitialState {
  pizza: { id: string }[];
  pizzaError: string;
}

const initialState: InitialState = {
  pizza: [],
  pizzaError: "",
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default pizzaSlice.reducer;
