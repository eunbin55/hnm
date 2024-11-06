import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/eunbin55/hnm/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchOne",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/eunbin55/hnm/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  // redux에 의해 바로 호출되는 애들.
  // 즉, 동기적으로 자신의 state를 바꾸는 경우.
  reducers: {},
  // 바로 호출하는게 아닌 thunk 등 외부 라이브러리에 의해 호출되는 애들
  // 외부로부터 state가 바뀌는 경우(주로 비동기 케이스)
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // loading
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // success
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // error
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        // success
        state.selectedItem = action.payload;
      });
  },
});

export default productSlice.reducer;
