import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ProductAction } from "../actions/productActions";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;

// useSelector 사용할 때 타입 유추하기 위해서, 타입을 만들어서 내보내기해줌
// ReturnType: reducers의 반환값의 타입을 추론
export type RootState = ReturnType<typeof reducers>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ProductAction
>;

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, ProductAction>;
