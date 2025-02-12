import { createStore } from "redux";
import reducers from "./reducers/index";

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 위 라인에서 window에 해당 객체가 있는지 확신이 불가능하기때문에(ts) 인터페이스 확장을 해서 해당 속성을 인식하게 해줌
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }
}

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
