import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = process.env.BASE_API_URL;

export const fetchPizza = createAsyncThunk(
  "burger/fetchPizza",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_API}/pizza`);
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Something went wrong while fetching pizza");
    }
  }
);
