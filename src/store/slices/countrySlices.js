import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountrysByRegion = createAsyncThunk(
  "getCountrysByRegion",
  async (payload, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/region/${payload}`
      );
      return result.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const getCountryByName = createAsyncThunk(
  "getCountryByName",
  async (payload, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/name/${payload}`
      );
      return result.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  countrysByRegion: [],
  countryDetails:[],
};
export const countrySlices = createSlice({
  name: "country",
  initialState,
  reducers: {
    // increment: (state, actions) => {
    //   state.counter += actions.payload;
    // },
    // decrement: (state, actions) => {
    //   state.counter -= actions.payload;
    // },
  },
  extraReducers: (builder) => {
    // get countrys by region
    builder.addCase(getCountrysByRegion.pending, (state, action) => {});
    builder.addCase(getCountrysByRegion.fulfilled, (state, action) => {
      state.countrysByRegion = action.payload;
    });
    builder.addCase(getCountrysByRegion.rejected, (state, action) => {
      console.log("rejected", action.payload.response.data.message);
    });
    

    // get country by name
    builder.addCase(getCountryByName.pending, (state, action) => {});
    builder.addCase(getCountryByName.fulfilled, (state, action) => {
      state.countryDetails = action.payload;
    });
    builder.addCase(getCountryByName.rejected, (state, action) => {
      console.log("rejected", action.payload.response.data.message);
    });
  },
});

export const { increment, decrement } = countrySlices.actions;
export default countrySlices;
