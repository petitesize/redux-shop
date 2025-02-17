// 2. 액션의 이름에 맞게 액션을 생성해준다. 액션 크리에이터
import fakestoreapi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";
import { IProduct } from "../reducers/productReducer";
import { AppThunk } from "../reducers";

// 액션 타입 정의
interface FetchProductsAction {
  type: ActionTypes.FETCH_PRODUCTS;
  payload: IProduct[];
}

interface SetProductsAction {
  type: ActionTypes.SET_PRODUCTS;
  payload: IProduct[];
}

interface SelectedProductAction {
  type: ActionTypes.SELECTED_PRODUCTS;
  payload: IProduct;
}

interface RemoveSelectedProductAction {
  type: ActionTypes.REMOVE_SELECTED_PRODUCTS;
  //   remove에는 페이로드 없을거임, 하지만 유니온타입에 포함시키기 위해서 정확하게 정의해줘야한다.
  payload?: undefined;
}

// AppThunk<void> 반환
export const fetchProducts = (): AppThunk => async (dispatch) => {
  const res = await fakestoreapi.get("/products");
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: res.data as IProduct[],
  });
};

// https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks
export const fetchProduct =
  (id: string): AppThunk =>
  async (dispatch) => {
    const res = await fakestoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: res.data });
  };

export const setProducts = (products: IProduct[]): SetProductsAction => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product: IProduct): SelectedProductAction => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProduct = (): RemoveSelectedProductAction => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

// 유니온타입으로 묶어서 내보내기
export type ProductAction =
  | FetchProductsAction
  | SetProductsAction
  | SelectedProductAction
  | RemoveSelectedProductAction;
