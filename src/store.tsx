// src/store.ts
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./types/Item";

interface ItemState {
  data: Item[];
}

const initialState: ItemState = {
  data: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<Item[]>) => {
      state.data = action.payload;
    },
  },
});

export const { loadData } = itemSlice.actions;

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
