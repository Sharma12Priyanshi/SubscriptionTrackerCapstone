import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    addSubscription: (state, action) => {
      state.list.push(action.payload);
    },
    deleteSubscription: (state, action) => {
      state.list = state.list.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addSubscription, deleteSubscription } =
  subscriptionSlice.actions;

export default subscriptionSlice.reducer;