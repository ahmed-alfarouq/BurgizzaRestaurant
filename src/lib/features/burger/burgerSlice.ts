import { createSlice } from "@reduxjs/toolkit";
import { fetchBurgers } from "./burgerAPI";

interface InitialState {
  burger: { id: string }[];
  burgerError: string;
}

const initialState: InitialState = {
  burger: [],
  burgerError: "",
};

const bugerSlice = createSlice({
  name: "burgerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchBurgers.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default bugerSlice.reducer;
