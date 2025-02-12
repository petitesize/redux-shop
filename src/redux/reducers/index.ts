import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;

// useSelector 사용할 때 타입 유추하기 위해서, 타입을 만들어서 내보내기해줌
// ReturnType: reducers의 반환값의 타입을 추론
export type State = ReturnType<typeof reducers>;
