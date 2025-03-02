import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = process.env.BASE_API_URL;

export const fetchBurgers = createAsyncThunk(
  "burger/fetchBurgers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_API}/burgers`);
      return res.data;
    } catch {
      thunkAPI.rejectWithValue("Something went wrong while fetching burgers");
    }
  }
);
