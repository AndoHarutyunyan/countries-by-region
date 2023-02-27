import { configureStore } from "@reduxjs/toolkit";
import countrySlices from "./slices/countrySlices";

const store = configureStore({
  reducer: countrySlices.reducer,
});

export default store;
