// 3. 액션 타입에 맞는 리듀서를 생성해준다. 액션이 디스패치되면 할 작업들
import { ProductAction } from "../actions/productActions";
import { ActionTypes } from "../constants/action-types";

export interface IProduct {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
}

export interface IProductState {
  products: IProduct[];
}

const initState: IProductState = {
  products: [],
};

export const productReducer = (
  state = initState,
  { type, payload }: ProductAction
): IProductState => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state: IProduct | {} = {},
  { type, payload }: ProductAction
): IProduct | {} => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    //   remove기 때문에, 빈 객체 반환할 것
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
