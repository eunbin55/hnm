import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedItem: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getOneProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
