import { productActions } from "../reducers/productReducer";

// 미들웨어 함수들
function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/eunbin55/hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/eunbin55/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getOneProduct({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
